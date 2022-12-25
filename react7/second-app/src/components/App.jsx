import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function dart(contacts){
    return(
        <Card
        key={contacts.id}
        name={contacts.name}
        img={contacts.imgURL}
        tel={contacts.phone}
        mail={contacts.email}
        />
    );
}


function App(props){
    return(
        <div>
            <h1>My Contact</h1>
            <Avatar
            img="https://64.media.tumblr.com/77432b89ceb4d13e8fc9a7be8b17d77a/6b7919f051dd2db3-92/s400x600/6bdcff90c2291300d1e08390b5240c630bd175bc.jpg"/>
            {contacts.map(dart)}
        </div>
    );
}



export default App;