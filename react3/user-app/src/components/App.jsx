import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";


function App(props){
    return(
        <div>           
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary"> {emojipedia.map(emojipedia=>(
           <Card
           key={emojipedia.id}
           emoji={emojipedia.emoji}
           name={emojipedia.name}
           meaning={emojipedia.meaning}
           />))}
           </dl>
        </div>
    );

}

export default App;