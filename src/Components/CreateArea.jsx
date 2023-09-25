import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props) {

    const [expanded,setExpanded]=useState(false)

    const [formData,setFormData]=useState({
        title:"",
        content:""
    })

    function SaveEntries(event){
        const {name,value}=event.target;
        setFormData((prevEntry)=>{
            return ( {
                ...prevEntry,
                [name]:value
            }
            );
        })
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        props.submit(formData); 

        setFormData({
            title:"",
            content:""
        })
    }

    function HandleExpandtion() {
        setExpanded(true);
    }
    return (
        <div>
        <form className="create-note" onSubmit={handleSubmit}>
            {expanded && <input name="title" placeholder="Title" onChange={SaveEntries} value={formData.title}/>}
            
            <textarea name="content" placeholder="Take a note..." rows={expanded? "3" : "1"} onChange={SaveEntries} value={formData.content} onClick={HandleExpandtion}/>
            <Zoom in={expanded}>
                <Fab type="submit"><AddIcon /></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
