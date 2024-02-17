"use client";
import React, { useEffect, useState } from 'react';
import ListBox from './ListBox';



function Filter({filterOptions, setFilterOptions}) {
  
  const [filteredClasses, setFilteredClasses] = useState([]);

  useEffect(() => {
    const filterClasses = () => {
      let newFilteredClasses = [];

      if (filterOptions.grade === "A") {
        newFilteredClasses = classes.filter((c) => c.includes("A"));
      } else if (filterOptions.grade === "B") {
        newFilteredClasses = classes.filter((c) => c.includes("B"));
      } else if (filterOptions.grade === "C") {
        newFilteredClasses = classes.filter((c) => c.includes("C"));
      } else {
        newFilteredClasses = classes;
      }
      setFilteredClasses(newFilteredClasses);
    };

    

    filterClasses();
  }, [filterOptions]);

  const handleFilterOptionChange = (optionName, value) => {
    setFilterOptions({
      ...filterOptions,
      [optionName]: value,
    });
  };

  return (
    <section className='w-full' >
      <h1 className="text-2xl font-semibold text-d_grey mb-4">Filter</h1>
      <form className="relative w-full flex flex-wrap lg:flex-nowrap gap-5">
        <ListBox array={grades} selected={filterOptions.grade} setSelected={(value) => handleFilterOptionChange('grade', value)} />
        {filterOptions.grade !== "A" && <ListBox array={departments} selected={filterOptions.department} setSelected={(value) => handleFilterOptionChange('department', value)} />}
        <ListBox array={filteredClasses} selected={filterOptions.selectedClass} setSelected={(value) => handleFilterOptionChange('selectedClass', value)} />
        
      </form>
    </section>
  );
}

export default Filter;



const grades = [
  'A',
  'B',
  'C',
];

const departments = [
  'Programming',
  'Network',
  'Telecomunication',
];
const classes = [
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'A6',
  'A7',
  'A8',
  'A9',
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
  'B8',
  'B9',
  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
  'C8',
  'C9',
];