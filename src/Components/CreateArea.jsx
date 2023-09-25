import React, { useState } from "react";

function CreateArea(props) {
    
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

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={SaveEntries} value={formData.title}/>
            <textarea name="content" placeholder="Take a note..." rows="3" onChange={SaveEntries} value={formData.content}/>
            <button type="submit">Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
