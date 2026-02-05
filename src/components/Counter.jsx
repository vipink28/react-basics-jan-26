import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const incrementHandler = () => {

        setCount(count + 1)
    }
    const decrementHandler = () => {
        setCount(count - 1)
    }

    return (
        <div className="bg-slate-800 text-white p-5 flex flex-col items-center">
            <h2 className="text-3xl mb-4">{count}</h2>
            <div className="flex items-center gap-3">
                <button onClick={incrementHandler} className="px-4 py-2 bg-amber-200">Increment</button>
                <button onClick={decrementHandler} className="px-4 py-2 bg-amber-200">Decrement</button>
            </div>
        </div>
    )
}
export default Counter;