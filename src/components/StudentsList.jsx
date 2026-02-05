import { useState } from "react";
import TableRow from "./TableRow";

function StudentsList() {
    const data = [
        { id: 1, name: "Suchi", course: "Mern", gender: "Female", fees: 12000 },
        { id: 2, name: "Avneet", course: "Python", gender: "Male", fees: 10000 },
        { id: 3, name: "Muskan", course: "Mern", gender: "Female", fees: 15000 },
        { id: 4, name: "Karan", course: "PHP", gender: "Male", fees: 18000 },
        { id: 5, name: "Pankaj", course: "Python", gender: "Male", fees: 20000 },
    ]
    const [studentsData, setStudentsData] = useState(data);

    const deleteStudent = (id) => {
        const filteredStudents = studentsData.filter((item, index) => (
            item.id !== id
        ))
        setStudentsData(filteredStudents);
    }



    const addStudent = () => {
        let newStudent = { id: 6, name: "Shivani", course: "Python", gender: "Female", fees: 20000 }

        setStudentsData((prev) => {
            return [
                ...prev,
                newStudent
            ]
        })
    }

    return (
        <div className="p-3">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Fees</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentsData.map((item, index) => {
                            return (
                                item.fees > 2000 &&
                                <TableRow key={item.id} item={item} deleteStudent={deleteStudent} />
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={addStudent}>Add Student</button>
        </div>
    )
}
export default StudentsList;