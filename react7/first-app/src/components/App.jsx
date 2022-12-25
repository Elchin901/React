import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import note from "../note";

function App(){
    return (
        <div>
            <Header/>
            {note.map(noteItem=>(
                <Note
                key={noteItem.id}
                title={noteItem.title}
                content={noteItem.content}
                />))}
            <Footer/>
        </div>
    );
}

export default App;