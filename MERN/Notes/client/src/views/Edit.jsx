import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

  const {id} = useParams()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [errorHandler, setErrorHandler] = useState({})
  const [isImportant, setIsImportant] = useState(false)
  const nav = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newData = {
      title,
      content,
      isImportant
    }

    axios.put("http://localhost:8000/api/notes/" + id, newData)
      .then(res => {
          console.log("✅✅✅", res.data)
          nav("/home")

      })
      .catch(err => {
          console.log("❌❌❌❌", err.response.data.errors)
          setErrorHandler(err.response.data.errors)
      })
    
    setContent('')
    setIsImportant('')
    setTitle('')

  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/notes/" + id)
        .then(res => {
            console.log(res.data)
            setTitle(res.data.title)
            setIsImportant(res.data.isImportant)
            setContent(res.data.content)
        })
        .catch(err => console.log(err))
}, [])
  return (
    <div className="form">
      <h4>Update Note</h4>
      <form onSubmit={handleSubmit}>
        '<div>
            <label >Title:</label> <br />
            <input type="text" value={title} onChange={e => { setTilte(e.target.value) }} />
            <br />
            {errorHandler.title && <p>{errorHandler.title.message}</p>}
        </div>
        <div>
            <label >Content:</label> <br />
            <textarea name="" id="" value={content} onChange={(e) => {setContent(e.target.value)}}></textarea>
            {errorHandler.content && <p style={re}>{errorHandler.content.message}</p>}
        </div>
        <div>
            <label > Important ?</label>  <br />
            <input type="checkbox" value={isImportant} onChange={e => { setIsImportant(e.target.checked) }} />
        </div>
        <button>Create</button>
      </form>
  </div>
  )
}

export default Edit