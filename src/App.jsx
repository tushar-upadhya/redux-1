import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
    const count = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const add = () => {
        dispatch({ type: "add" });
    };

    const sub = () => {
        dispatch({ type: "sub" });
    };

    const addBy = () => {
        dispatch({ type: "addBy" });
    };

    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={add}>add</button>
            <button onClick={sub}>sub</button>

            <button onClick={addBy}>add value</button>
        </>
    );
}

export default App;
