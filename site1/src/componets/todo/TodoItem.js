import React from  'react'
import {partial} from '../../lib/utils'
export const TodoItem=(props)=>
{
    const handleToggle=partial(props.handleToggle,props.id);


    return(    
    <li >
        <input type="checkbox" 
        onChange={handleToggle} 
        checked={props.isComplete} />{props.name}
        </li>
        )
}