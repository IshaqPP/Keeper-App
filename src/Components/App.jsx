import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from './CreateArea'
import { useState } from "react";


function App() {
    const [note,setNotes]=useState([]);

    function addNotes(formData) {
        setNotes((prevNotes)=>{
            return(
                [...prevNotes,formData]
            )
        })
    }

    function DeleteNotes(id) {
        setNotes((prevNotes)=>{
            return prevNotes.filter((val,index)=>{
                return index !== id ;
            })
        })
    }


    return(
        <div>
            <Header />
            <CreateArea submit={addNotes}/>
            {note.map((note,index)=>{
                return(
                    <Note  key={index} index={index} title={note.title} content = {note.content} delete={DeleteNotes}/>
                );
            })}
            <Footer />
        </div>
    );
}

export default App;