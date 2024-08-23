import './App.css'
import React, { useEffect } from 'react';
import {apiUrl,filterData} from "./data";
import {useState} from "react";


export default function App() {
  
const[courses,setCourses] = useState(null);// courses api data//we can use [] instead of null
const [loading,setLoading] = useState(true);
const [category, setCategory] = useState(filterData[0].title);
  
     async function fetchData(){
       setLoading(true);
      try{
        let response = await fetch(apiUrl);
        let output = await response.json(); 
        //save data into a variable
       // setCourses(output.data);
        setCourses(output.data);//inner data is a key inside data object
      
      }catch(error){
        toast.error("Something went wrong");
      }
       
       setLoading(false);
     }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <main>
      <div><Navbar/></div>

      <div><Filter 
             
         setCategory = {setCategory}
        filterData = {filterData}
         category = {category} /></div>
      
      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses} category={category}/>)
        }
      </div>
      
    </main>
    
  )
}
