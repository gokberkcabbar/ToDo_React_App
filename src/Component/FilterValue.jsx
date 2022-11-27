import filter from 'plotly.js/lib/filter'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const FilterValue = ({
    completeds,
    setcompleteds,
    todo
}) => {
  
    const filters =["All", "Active", "Completed"]  
    const [filterSelection, setfilterSelection] = useState("All")
    useEffect(() => {
        if(filterSelection == filters[0]){
            
            const allItems = [...completeds.item]
            setcompleteds({...completeds, repo : allItems})
        }
        if(filterSelection == filters[1]){
            const selections = [...completeds.selecteds]
            const activeItems = [...completeds.item].filter((val)=> val = !selections.includes(val))
            setcompleteds({...completeds, repo : activeItems})
        }
        if(filterSelection == filters[2]){
            const completedItems = [...completeds.selecteds]
            setcompleteds({...completeds, repo : completedItems})
        }
    }, [filterSelection, todo, completeds.item, completeds.selecteds])


     const selectFilter = (index)=>{
        setfilterSelection(filters[index])
    }

    return (
    <>
        {
            filters.map((value, index)=>{
                return(
                    <button key={index} onClick={()=> selectFilter(index)} className={`text-xl hover:text-light-grayish-blue-hover ${filterSelection == filters[index] ? "text-light-grayish-blue" : ""}`}>{filters[index]}</button>
                )
            })
        }
    </>
  )
}
