import React from 'react'

const Buttons = ({index, name, items, task, setPageNumber}) => {
  return (
<div>
    <style jsx>
    {
        `
        .change:checked +label{
            background-color: white;
            color: black;
        }
        input[type="radio"]{
            display:none;
        }
        `
    }
    </style>
    <div className="form-check">
    <input onClick={()=> {setPageNumber(1); task(items)}} className="form-check-input change" type="radio" name={name} id={`${name}-${index}`}/>

    <label class="btn btn-outline-white" for={`${name}-${index}`}>{items}</label>
</div>

    </div>
  )
}

export default Buttons
