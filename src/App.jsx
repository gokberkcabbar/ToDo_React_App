import { useState } from 'react'
import './App.css'
import { SelectMode } from './Component/SelectMode'
import { ToDoList} from './Component/ToDoList'
import { FilterValue } from './Component/FilterValue'

function App() {

  const [darkMode, setdarkMode] = useState(true)
  const [todo, settodo] = useState({
    /*inputted = submit basıldı mı? inputValue = girilen değer checked = butonu 0 lamak  */
    inputted : false, 
    inputValue : "",
    checked : false
    })

  
  const [completeds, setcompleteds] = useState({
    selecteds : [],
    item : [],
    repo: []
  })

  const [filter, setfilter] = useState("All")

  const submitTodo = () => {
      

      todo.inputted = !todo.inputted
      if (completeds.item.includes(todo.inputValue)){
        settodo({...todo, inputValue : "Lütfen varolan değer girmeyin."})
        return ""
      }
      let newItem = [...completeds.item, todo.inputValue]
    
      setcompleteds({...completeds, item : newItem})

      settodo({...todo, inputted : false})
      settodo({...todo, checked : false })
      settodo({...todo, inputValue : ""})
  }
  const resetCompleted = () => {
    const selectedDeleted = [...completeds.item].filter((val) => ![...completeds.selecteds].includes(val))
    console.log(selectedDeleted)
    setcompleteds({...completeds, item : selectedDeleted, selecteds : []})
  }

  

  return (
    <>
    <img src={`${darkMode ? '../bg-desktop-dark.jpg' : '../bg-desktop-light.jpg'}`} className='z-0 fixed top-0 left-0 w-full h-[300px]' />
    <div className={`${darkMode ? 'bg-very-dark-blue' : 'bg-very-light-grayish-blue'} fixed top-[300px] left-0 h-full w-full z-0`}></div>
    <div className='flex flex-col container mx-auto mt-[40px] w-[40%] z-20'>
      <div className='flex flex-row justify-between z-20'>
        <h1 className='tracking-widest text-white font-bold text-3xl'>T   O   D   O</h1>
        <SelectMode darkMode={darkMode} setdarkMode={setdarkMode}/>
      </div>
      <div className={`flex flex-row justify-start z-20 rounded-lg shadow-xl ${darkMode ? 'bg-very-dark-grayish-blue' : 'bg-light-grayish-blue'} w-full h-[60px] mt-[40px] p-4`}>
        <input type="checkbox" id='checkTodo' checked={todo.checked} className="w-[24px] h-[24px] rounded-full" onClick={() => submitTodo()} />
        <input type="text" onClick={() => settodo({...todo, inputValue : ""})} onChange={(event) => settodo({...todo, inputValue : event.target.value})} id="createTodo" className={`ml-[30px] w-full text-lg font-extralight bg-transparent border-none focus:ring-0 ${darkMode ? 'text-white' : 'text-black'}`} placeholder='Create a new todo..' value={todo.inputValue}/>
      </div>
      <div className={`flex flex-col mt-[20px] z-20 w-full ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'bg-very-dark-grayish-blue' : 'bg-light-grayish-blue'}`} >
        <ToDoList todo={todo} settodo={settodo} completeds={completeds} setcompleteds={setcompleteds} className='flex flex-col'/>
        <div className={`flex flex-row justify-between ${completeds.item.length == 0 ? 'hidden':''}`} >
          <p className='text-base font-extralight'>{completeds.repo.length} items left</p>
          <div className='flex flex-row text-lg gap-4 font-light'>
            <FilterValue todo={todo} completeds={completeds} setcompleteds={setcompleteds}/>
          </div>
          <button onClick={()=> resetCompleted()} className='text-base font-extralight'>Clear Completed</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
