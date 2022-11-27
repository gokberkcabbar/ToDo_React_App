import React from 'react'
import { SelectMode } from './SelectMode'
import { useEffect } from 'react'
import { useRef } from 'react'

export const ToDoList = ({
    todo,
    settodo,
    completeds,
    setcompleteds
}) => {

    const checkedd = useRef(null)

    const complete = (value, index, id) =>{
    
     
    if(checkedd.current.checked == true){
       let selected = [...completeds.selecteds, value]
        setcompleteds({...completeds, selecteds : selected})
        
    }
    else{
        let deleted =[...completeds.selecteds.filter((e)=> value != e)]
        setcompleteds({...completeds, selecteds : deleted})

    }

    }

    return (
    <div className='flex flex-col w-full'>
        {
            completeds.repo.map((value, index)=> {
                return (
                    <div className='flex flex-row w-full p-3'>
                    <input ref={checkedd} type="checkbox" key={index} checked={completeds.selecteds.includes(value) ? true : false} id={`${index}`} className="w-[18px] h-[18px] rounded-full" onClick={() => complete(value, index)} />
                    <p key={index} className={`ml-[40px] border-b-2 border-black w-full justify-start flex ${completeds.selecteds.includes(value) ? 'line-through' : ''}`}>{value}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
