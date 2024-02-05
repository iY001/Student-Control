import getStudents from '@/Services/Students/getStudents';
import React from 'react';

const Table = async () => {
  const students = await getStudents()
  
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-[90%]">
        <thead>
          <tr className="bg-main text-white">
            <th className="px-4 py-2">Select</th>
            <th className="px-4 py-2">Student Code</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Grade</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          { students && students.map((student, index) => (
            <tr key={student.id} className={  index % 2 === 0 ? 'whitespace-nowrap' : 'bg-gray-200 whitespace-nowrap'}>
              <td className="border px-4 py-2"><input  type="checkbox" /></td>
              <td className="border px-4 py-2">{student.stdCode}</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.grade || "other"}</td>
              <td className="border px-4 py-2">{student.className}</td>
              <td className="border px-4 py-2">{student.department || "no department"}</td>
              <td className="border px-4 py-2">{student.email || "no email"}</td>
              <td className="border px-4 py-2">{student.phoneNumber || "no phone"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
