import React from 'react'
import Card from './components/Card '

const Cards = ({ courses },{category} ) => {

  const[likedCourses,setLikedCourses] = useState([]);
  
  //we want all the available data in array form
  
  //return you a list of all courses received from the api response
  function getCourses(){

    if(category === "All"){
      let allCourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourses.push(courseData); 
        })
      })

      return allCourses;
    }
    else{
      //want show only the specified category of course
      return courses[category];
    }
   
  }


  return (
    <div>
      {
        getCourses().map((course) => (
         (<Card key={course.id} course = {course} likedCourses= 
            {likedCourses}  setLikedCourses={setLikedCourses}/>)//
      ))
      }
    </div>
  )
}

export default Cards;