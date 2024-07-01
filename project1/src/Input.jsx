import React, { useState } from 'react'

const Input = () => {
    const [data,setData]=useState("")
    const [gender,setgender]=useState("")
    const [sortBySalary,setSortBySalary]=useState("")
    const [order,setOrder]=useState()
    const [error,setError]=useState(null)
    async function getdata(){
        try {
            const res =await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=female&sort=salary&order=asc")
            // const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=${gender}&sort=${sortBySalary}&order=${order}`)
            const finalres=await res.json()
            console.log(finalres.data)
            setData(finalres.data)
        } 
        catch (error) {
            setError(error)
        }
    }
  return (
    <>
    
    <div style={{display:"flex"}}>
      <div >

        <label htmlFor="" style={{border:"blue"}}>serch for departmnent 
            <select name="" id="" onChange={getdata}>
                <option value="operations"> operations </option>
                <option value="marketing"> marketing</option>
                <option value="engineering">Engennering</option>
            </select>
        </label>
      </div>

      <div style={{marginLeft:"25px",width:"300px",border:"1px solid gray"}}>
      <label htmlFor=""> select Month
            <select name="" id="">
                <option value=""></option>
            </select>
         </label>
      </div>


      <div style={{marginLeft:"25px",width:"300px",border:"1px solid gray"}}>
       <label htmlFor=""> select gender
       <select name="" id="">
            <option value="">  </option>
            <option value=""> male female</option>
        </select>
       </label>
        
      </div>
      
    </div>
    {error && <div>{error.message}</div>}
    <ul>
   
               
    {data.map((ele,i)=>{
        return (
            <div key={i}>
                
                <p> Name: {ele.name} </p>
            </div>
        )
    })}            
    </ul>
   </>
  )
}

export default Input
    
   
