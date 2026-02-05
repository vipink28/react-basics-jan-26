import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState("")
    const titleHandler = (event) => {
        // console.log(event);
        setTitle(event.target.value);
    }

    const [formData, setFormData] = useState(null)
    // {username: "Vipin", email:"vipin@gmail.com", password: "admin"}
    const data = [
        { id: 1, name: "Suchi", course: "Mern", gender: "Female", fees: 12000 },
        { id: 2, name: "Avneet", course: "Python", gender: "Male", fees: 10000 },
        { id: 3, name: "Muskan", course: "Mern", gender: "Female", fees: 15000 },
        { id: 4, name: "Karan", course: "PHP", gender: "Male", fees: 18000 },
        { id: 5, name: "Pankaj", course: "Python", gender: "Male", fees: 20000 },
    ]
    const [studentsData, setStudentsData] = useState(data);
    const inputHandler = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormData((prev) => {
            return {
                ...prev,
                id: studentsData.length === 0 ? 1 : studentsData.length + 1,
                // id: studentsData[studentsData.length - 1].id + 1,
                [name]: value
            }
        })
    }

    // spread operator is used to spread the values outside an array/object into a new array/object
    // ...
    // let arr1 = ["1", "2"]
    // let arr2 = ["3", "4"]
    // let arr3 = ["1", "2", ...arr2, "5"]
    return (
        <div className="p-5 flex justify-center flex-col gap-4">
            <div>
                <input type="text" className="border border-gray-500 p-2" onChange={titleHandler} />
            </div>

            <div className="p-3 bg-amber-200">
                <input type="text" name="username" placeholder="User Name" className="border border-gray-500 p-2" onChange={inputHandler} />

                <input type="text" name="email" placeholder="Email" className="border border-gray-500 p-2" onChange={inputHandler} />

                <input type="text" name="password" placeholder="Password" className="border border-gray-500 p-2" onChange={inputHandler} />
            </div>

        </div>
    )
}
export default Form