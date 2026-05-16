import { useState } from "react";
import "./App.css";

function App() {
const [count, setCount] = useState(0);

function increment() {
setCount(count + 1);
}
function decrement() {
setCount(count - 1);
}
function reset() {
setCount(0);
}
return (
<div className="container">
<div className="counter-box">
<h1>React Counter Application</h1>
<h2>{count}</h2>
<div className="btn-group">
<button className="inc-btn" onClick={increment}>
Increment (+)
</button>
<button className="dec-btn" onClick={decrement}>
Decrement (-)
</button>
</div>
<button className="reset-btn" onClick={reset}>
Reset
</button>

</div>

</div>

);

}

export default App;