"use client"
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import ListBox from './ListBox'
import getGrades from '@/Services/grade/getGrades'
function Filter() {

    const grades = getGrades()

    const Grades = [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },

    ]
    const Departments = [
        { name: 'Programming' },
        { name: 'Network' },
        { name: 'Telecomunication' },
    ]
    const Classes = [
        { name: 'C1' },
        { name: 'C2' },
        { name: 'C3' },
        { name: 'C4' },
        { name: 'C5' },
        { name: 'C6' },
        { name: 'C7' },
        { name: 'C8' },
    ]

    const [selectedGrade, setSelectedGrade] = useState("Grade")
    const [selectedDept, setSelectedDept] = useState("Department")
    const [selectedClass, setSelectedClass] = useState("Class")
    return (
        <>
            <h1 className="text-2xl font-semibold text-d_grey mb-4">Filter</h1>
            <form className="relative md:w-full flex md:flex-nowrap flex-wrap">
                <p>{grades.gradeName}</p>
                <ListBox array={Grades} selected={selectedGrade} setSelected={setSelectedGrade} />
                <ListBox array={Departments} selected={selectedDept} setSelected={setSelectedDept} />
                <ListBox array={Classes} selected={selectedClass} setSelected={setSelectedClass} />
                <button className='lg:w-[8%] md:mx-8 md:mt-0 mt-10 h-9 w-[94%] md:px-2  bg-main hover:bg-sec foucs:bg-sec rounded-lg duration-300 active:ring-2 active:ring-gray-300 text-white shadow-md focus-visible:ring-2 focus-visible:ring-white/75 ring-1 ring-black/5'>Search</button>
            </form>
        </>
    )
}

export default Filter