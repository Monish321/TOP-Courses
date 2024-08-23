import React from 'react';
import {FcLike} from "react-icons/fc"

const Card = ({course},{likedCourses},{setLikedCourses}) => {
  
  function clickHandler() {
     //logic
      if(likedCourses.includes(course.id)){ 
        //means already its been liked
        setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
        toast.warning("like removed");   
      }
    else{
      //the course is not liked before
      //then i want to insert it into the liked courses array
       if(likedCourses.length === 0){
         setLikedCourses([course.id]);
       }
      else{
        //non-empty pehle se
        setLikedCourses((prev) => (
          [...prev, course.id]));
      }
      toast.success("liked");
    }
  }  
  return (
    <div>
        <img src={course.image.url}></img>
      <div>
        <button onClick = {clickHandler}>
          {
            likedCourses.includes(course.id) ?( <FcLike 
    fontSize="1.75rem"/>):( <FcLikePlaceholder fontSize="1.75rem"/>)
          }
        </button> 
      </div>
      <div>
        <p>{course.title}</p>
        <p>{
        course.description.length>100 ? (course.description.substr(0,100)+"...") : (course.description)
        }</p>
      </div>
    </div>
  );
}

export default Card;