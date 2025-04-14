import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import './style/Home.css'

const Home = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/notes/')
      .then(res=> {
        console.log(res.data)
        setNotes(res.data)
      })
      .catch(error=> {
        console.log(error)
      })
  },[])

  const deleteNote = (idToDelete) => {
    axios.delete("http://localhost:8000/api/notes/" + idToDelete)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))



  return (
    <div className="main">
      <ul className='note'>
        {
          notes.map((note) => {
            return(
              <li key={note.id}>
              <Link to={`/notes/${note.id}`}>
                <h3>{note.title}</h3>
                <p className='content'>{note.content}</p>
              </Link>
              <div className="btns">
                <button className="edit">Edit</button>
                <button onClick= {()=> { deleteNote(note.id) }}  className="delete">Delete</button>
              </div>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}
}

export default Home