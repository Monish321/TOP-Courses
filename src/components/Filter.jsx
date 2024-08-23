import React from 'react';

const Filter = ({filterData} {category} {setCategory})=>{//props
  //other way to import
  //let filterData = props.filterData

  function filterHandler(){
    setCategory(title);
  }
  
  return(
     <div>
       {
         filterData.map((data)=>{//data is an object 
        return(
          <button key={data.id}
            onClick = {() => filterHandler(data.title)}>
            {data.title} 
          </button>
        )
       })
       }
     </div>
  )
}

export default Filter;
