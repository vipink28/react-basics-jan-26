function TableRow({ item, deleteStudent }) {
    const { id, name, course, fees, gender } = item;
    return (
        <tr className={gender === "Female" ? "bg-green-500" : ""}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{course}</td>
            <td>{fees}</td>
            <td>{gender}</td>
            <td><button onClick={() => deleteStudent(id)}>Delete</button></td>
        </tr>
    )
}

export default TableRow

