import './App.css';
function Student(props) {

  return (

    <div className="card">

      <h2>Name: {props.name}</h2>

      <p>Marks: {props.marks}</p>

      <p>Course: {props.course}</p>

    </div>

  );

}
function App() {

  return (

    <div>

      <h1>Student Cards</h1>

      <Student
        name="Priya"
        marks="30"
        course="CSE"
      />

      <Student
        name="Arush"
        marks="92"
        course="IT"
      />

    </div>

  );
}

export default App;