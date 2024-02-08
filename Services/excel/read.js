import XLSX from "xlsx"
import getClassByName from "../Classes/getClassByName";
import postStudent from "../Students/postStudent";
import excelHelper from "../Classes/excelHelper";

export default async function readExcel(file) {
  try {
    const data = await readFile(file);
      
    for (let index = 0; index < data.length; index++) {
      const student = data[index];
      const classId = (await excelHelper(student.className, student.grade || "other"))?.id;
      await postStudent({
        name: student.name,
        stdCode: student.stdCode,
        className: student.className,
        email: student.email,
        phoneNumber: student.phoneNumber,
        department: student.department,
        grade: student.grade,
        classId: classId
      });
      console.log("Student added: ", index);
    }
  } catch (error) {
    console.log(error);
  }
}


async function readFile(file) {
  try {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; 
    const worksheet = workbook.Sheets[sheetName];
    const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    const headerRow = parsedData[0]; 
    const columnNames = headerRow.map((columnName, columnIndex) => {
      return {
        name: columnName.toLowerCase().trim(),
        index: columnIndex
      };
    });

    const transformedData = parsedData.slice(1).map((row) => ({
      name: getColumnValue(row, columnNames, ["firstname", "الاسم الاول"]) + " " + getColumnValue(row, columnNames, ["lastname", "الاسم الاخير"]),
      stdCode: getColumnValue(row, columnNames, ["code", "رقم الطالب"]),
      grade: getColumnValue(row, columnNames, ["grade", "الصف"]),
      className: getColumnValue(row, columnNames, ["class","classname", "الفصل"]),
      email: getColumnValue(row, columnNames, ["email", "البريد الالكتروني"]),
      phoneNumber: getColumnValue(row, columnNames, ["phone", "رقم الهاتف"]),
      department: getColumnValue(row, columnNames, ["department", "القسم"]) || null
    }));

    return transformedData;
  } catch (error) {
    console.log(error);
  }
}

function getColumnValue(row, columnNames, columnPossibilities) {
  for (const colName of columnPossibilities) {
    const column = columnNames.find(column => column.name === colName);
    if (column) {
      const columnIndex = column.index;
      return row[columnIndex];
    }
  }
  return null;
}
