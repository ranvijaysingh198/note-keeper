import React, { useState } from "react";

function CreateArea(props) {
  // const [inputText,setInputText] = useState("");
  // const [inputTextArea,setInputTextArea] = useState("");
  // const [addNotes,setAddNotes] = useState([])

  const [note,setNote] = useState({
    title: "",
    content: ""
  })

  // function handleTitleChange(event){
  //   const newTitle = event.target.value;
  //   setInputText(newTitle)
  //   // console.log(newTitle)
  // }
  // function handleTextArea(event){
  //   const newTextArea = event.target.value;
  //   setInputTextArea(newTextArea);
  //   // console.log(newTextArea)
  // }
  function handleChange(event){
    const {name,value} = event.target;
    setNote(prevNotes =>{
      return{...prevNotes,[name]:value}
    })
  }

  function handleClick(event){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    
    event.preventDefault();
  }


  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
