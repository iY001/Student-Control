"use client"
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

import { useRowSelect } from "@table-library/react-table-library/select";

const nodes =[
  {
    "id": "1",
    "name": "John Doe",
    "class": "10A",
    "code": "12345",
    "absence": "true"
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "class": "9B",
    "code": "67890",
    "absence": "false"
  },
  {
    "id": "3",
    "name": "Michael Johnson",
    "class": "11C",
    "code": "54321",
    "absence": "true"
  },
  {
    "id": "4",
    "name": "Emily Davis",
    "class": "12D",
    "code": "98765",
    "absence": "true"
  },
  {
    "id": "5",
    "name": "David Brown",
    "class": "10A",
    "code": "13579",
    "absence": "false"
  },
  {
    "id": "6",
    "name": "Sarah Wilson",
    "class": "9B",
    "code": "24680",
    "absence": "true"
  },
  {
    "id": "7",
    "name": "Robert Taylor",
    "class": "11C",
    "code": "97531",
    "absence": "false"
  },
  {
    "id": "8",
    "name": "Olivia Anderson",
    "class": "12D",
    "code": "86420",
    "absence": "true"
  },
  {
    "id": "9",
    "name": "James Martinez",
    "class": "10A",
    "code": "31415",
    "absence": "false"
  },
  {
    "id": "10",
    "name": "Sophia Hernandez",
    "class": "9B",
    "code": "92653",
    "absence": "true"
  }
]


const Component = () => {
  const data = { nodes };

  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        background-color:white;
      `,
      HeaderCell:`color:  #4e1294;`,
      Row: `
       &:first-child{
        background-color: red;
      }
      
        &:nth-of-type(odd) {
          background-color: #f7fbfe;
        
        }
        &:not(:last-of-type)>.td {
          border-bottom: none;
          padding:10px
      }

        &:nth-of-type(even) {
          background-color: #fffff;
        }
        &.row-select-selected{
          background-color: #592c8c;
          color:white
        }
      `,
    },
  ]);


  const select = useRowSelect(data );

  const COLUMNS = [
     { label: "Task", renderCell: (item) => item.name, select: true },
    { label: "Name", renderCell: (item) => item.name },
    { label: "Class", renderCell: (item) => item.class },
    { label: "Code", renderCell: (item) => item.code },
    {
      label: "Absence",
      renderCell: (item) => (item.absence === "true" ? "Yes" : "No"),
    },
  ];
  

  return (
    <>
      <CompactTable columns={COLUMNS} data={data} theme={theme} select={select} />

    </>
  );
};

export default Component;