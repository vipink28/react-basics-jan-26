// state - State is components memory.

import { useState } from "react"

function ReactState() {
    // to manage state of a component we can use - useState hook.
    // syntax- const [stateVariable, stateSetterFunction] = useState(defaultvalue)

    //local variable example
    let title = "React State"

    const changeTitleHandler = () => {
        console.log(title)
        title = "New React State"
        console.log(title)
    }

    //state variable example
    const [stateTitle, setStateTitle] = useState("React State Title");

    const changeStateTitleHandler = () => {
        setStateTitle("New React State Title")
    }

    return (
        <div className="p-6 group">
            <h2 className="text-2xl hover:text-white hover:bg-amber-400">{title}</h2>
            <button onClick={changeTitleHandler} className="px-4 py-2 bg-amber-200">Change Title</button>

            <h2 className="text-2xl group-hover:text-red-500">{stateTitle}</h2>
            <button onClick={changeStateTitleHandler} className="px-4 py-2 bg-amber-200">Change Title</button>
        </div>
    )
}
export default ReactState;

