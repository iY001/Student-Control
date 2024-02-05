import getStudents from '@/Services/Students/getStudents';
import React from 'react';

const Table =  async () => {
  const students = await getStudents()
  
  console.log(students)
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-[90%]">
        <thead>
          <tr className="bg-main text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Student Code</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Grade</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone Number</th>
          </tr>
        </thead>
        <h1>this is mustfaa</h1>
        <tbody>
          { students && students.map((student, index) => (
            <tr key={student.id} className={index % 2 === 0 ? '' : 'bg-gray-200'}>
              <td className="border px-4 py-2">{student.id}</td>
              <td className="border px-4 py-2">{student.stdCode}</td>
              <td className="border px-4 py-2">{student.Name}</td>
              <td className="border px-4 py-2">{student.Grade}</td>
              I'm A Error From the Hell
              <td className="border px-4 py-2">{student.Class}</td>
              <td className="border px-4 py-2">{student.Department}</td>
              <td className="border px-4 py-2">{student.Email}</td>
              <td className="border px-4 py-2">{student.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
