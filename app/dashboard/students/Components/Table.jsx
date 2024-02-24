"use client";
import React, { useEffect, useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'; // Importing icons
import Filter from './Filter';

const Table = ({ students }) => {
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    grade: "Grade",
    department: "Department",
    selectedClass: "Class",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const toggleSelect = (id) => {
    if (selectedStudents.includes(id)) {
      setSelectedStudents(selectedStudents.filter(studentId => studentId !== id));
    } else {
      setSelectedStudents([...selectedStudents, id]);
    }
  };

  const isSelected = (id) => {
    return selectedStudents.includes(id);
  };

  useEffect(() => {
    let filtered = students;

    if (filterOptions.grade !== "Grade" && filterOptions.grade !== null) {
      filtered = filtered.filter(student => student.grade?.includes(filterOptions.grade));
    }

    if (filterOptions.department !== "Department" && filterOptions.department !== null) {
      filtered = filtered.filter(student => student.department?.includes(filterOptions.department));
    }

    if (filterOptions.selectedClass !== "Class" && filterOptions.selectedClass !== null) {
      filtered = filtered.filter(student => student.className?.includes(filterOptions.selectedClass));
    }

    setFilteredStudents(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filterOptions, students]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto min-h-[100vh]">

      {/* Filter Container */}
      <div className="w-[75%]">
        <div className="p-4">
          <Filter filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
        </div>
      </div>
      {/* Filter Container */}

      <table className="table-auto w-[90%]">
        <thead>
          <tr className="bg-main text-white whitespace-nowrap">
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
          {currentItems.map((student, index) => (
            <tr key={student.id} className={isSelected(student.id) ? 'bg-main text-white ' : 'even:bg-gray-200 whitespace-nowrap'}>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  checked={isSelected(student.id)}
                  onChange={() => toggleSelect(student.id)}
                />
              </td>
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

      {/* Pagination */}
      <div className="pagination my-5 w-full flex items-center justify-center">
        <button className='p-2 w-10 h-7 bg-main text-white rounded-lg text-center mx-1 flex items-center justify-center' onClick={() => paginate(1)}>
          <FaAngleDoubleLeft />
        </button>
        {Array.from({ length: Math.ceil(filteredStudents.length / itemsPerPage) }).map((_, index) => (
          <button className='p-2 w-10 h-7 bg-main text-white rounded-lg text-center mx-1 flex items-center justify-center' key={index} onClick={() => paginate(index + 1)}>
            <span>{index + 1}</span>
          </button>
        ))}
        <button className='p-2 w-10 h-7 bg-main text-white rounded-lg text-center mx-1 flex items-center justify-center' onClick={() => paginate(Math.ceil(filteredStudents.length / itemsPerPage))}>
          <FaAngleDoubleRight />
        </button>
      </div>
      {/* Pagination */}
      
    </div>
  );
}

export default Table;
