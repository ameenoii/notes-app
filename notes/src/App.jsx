import { useState ,useRef,useEffect} from 'react'
import './App.css'
function App() {
  const titleRef = useRef(null)
  let [note, setNote] = useState("")
  let [list, setList] = useState([])
  let [title, setTitle] = useState("")
 let defaultTheme = {
    backgroundColor: "white",
    color: "black",
    h1: "black"
  }
  let [theme, setTheme] = useState(defaultTheme)
  let addNote = () => {
    if (note.trim() === "")
      return
    setList([...list,
    {
      title: title,
      note: note
    }
    ])
    setTitle("")
    setNote("")

    titleRef.current.focus()
  }
  let deletedNote = (index) => {
    setList(list.filter((_, i) => i !== index))
     titleRef.current.focus()
  }



  return (
    <div>
     
      <div className='main' style={{...theme ,minHeight: "100vh"}}>
         <nav className='nav'>
        <div className='theme' >
          <button className='blue' onClick={() => setTheme({
            backgroundColor : "lightblue",
            color: "darkblue",
            h1:"darkblue"
          })}>blueish</button>
          <button className='redish' onClick={() => setTheme({
            backgroundColor: "brown",
            color:"orange",
            h1:"orange"
          })}>redish</button>
          <button className='greenish' onClick={() => setTheme({
           backgroundColor: "lightgreen",
            color: "darkgreen",
            h1:"darkgreen"
          })}>greenish</button>
          <button className='default' onClick={()=> setTheme(defaultTheme)}>default</button>
       </div>
       </nav>
        <h1 className="head" style={{ color: theme.h1 }}>Note app</h1>
        <div className='front'>
          <div >
          <form>
            <input type='text'
              placeholder='enter title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>{title.length}/100</p>
            <textarea
              placeholder='enter your thoughts..'
              value={note}
              minLength={5}
              maxLength={100}
              required
              onChange={(e) => setNote(e.target.value)}
            />
            <p>{note.length}/100</p>

            <button onClick={addNote} className='addButton'>add</button>
          </form>
          </div>
          
        </div>
        {list.map((item, index) => (
            <div className='notecard' key={index}>
              <h1>{item.title}</h1>
              <p>{item.note}</p>
              <button onClick={() => deletedNote(index)}>delete</button>

            </div>
          ))}
      </div>
    </div>
  )
}
































export default App
