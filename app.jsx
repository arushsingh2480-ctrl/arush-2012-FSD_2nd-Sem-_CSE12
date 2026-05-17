function app(){
    return(
        <div>
            <h1>student card</h1>
            <student card name='priya' marks='30' grade='A+' ></student>
        </div>
    )
}
import studentcard from "/studentcard.jsx"
function student(){
    <div>
          <h2> name {Props.name} </h2> 
          <p> marks{props.marks}</p>
          <p>grade{props.grade}</p>
    </div>
}