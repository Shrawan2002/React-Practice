import { useEffect, useState } from "react";

export default function Joker(){
    let url = "https://official-joke-api.appspot.com/random_joke";

    let [joke,setJoke] = useState({});
    let handleJoke = async ()=>{
             let response = await fetch(url);
             let data = await response.json();
            //  console.log(data);
             setJoke({setup:data.setup,punchline:data.punchline})
    }
    useEffect(()=>{
        async function firstJoke() {
            let response = await fetch(url);
            let data = await response.json();
            setJoke({setup:data.setup,punchline:data.punchline})
        }
        firstJoke();
    },[])
    return (
        <div>
            <h2>Joke!</h2>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={handleJoke}>Random joke</button>
        </div>
    )
}