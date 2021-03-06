import React, {useState} from "react";

const AddPlanning = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [rounds,setRounds] = useState([]);

    const add_round = () => {
        setRounds(s => {return [...s,{name:""}]})
    }

    const changeName = e => {
        e.preventDefault()
        const idx = e.target.id
        setRounds(s => {
            const newArr = s.slice()
            newArr[idx].name = e.target.value
            return newArr
        })
    }

    const validate = (e)=>{
        e.preventDefault();
        if (name !=="") {
            let bodyLocal = JSON.stringify({name, date, rounds});
            fetch('/api/plannings/', {
                method: "POST",
                body: bodyLocal,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                setName("")
                setDate(new Date())
                setRounds([])
                }
            )
        }
    }

    return (
        <div>
        <h1>Create planning</h1>
        <form onSubmit={(e)=>{validate(e)}}>
            <label> Name </label>
            <input required type="text" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
            <label> Date </label>
            <input required type="date" onChange={(e) => setDate(new Date(e.currentTarget.value))}/>
            <button onClick={add_round}>Add round</button>
            <br/>
            {rounds && rounds .map((round,i) => {
                return <div>
                    <label> Round name </label>
                    <input required type="text" value={round.name} id={i} onChange={changeName}/>
                </div>
            })}
            <input type="submit" value="submit"></input>
        </form>
        </div>
    )
}
export default AddPlanning;







