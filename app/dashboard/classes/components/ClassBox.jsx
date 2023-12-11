import React from 'react'

function ClassBox() {
    return (
        <div className="bg-forth mt-8 pt-2 rounded-lg">
            <details color='' className="dropdown rounded-lg rounded-t-none bg-light1 p-2">
                <summary className="m-1 btn">CLASS NAME</summary>
                <ul className="p-2 dropdown-content z-[1] ">
                    <li><a>STUDENTS :</a></li>
                    <li><a>Absence  :</a></li>
                </ul>
            </details>
        </div>
    )
}

export default ClassBox