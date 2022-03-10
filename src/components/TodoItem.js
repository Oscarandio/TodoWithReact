import React from 'react';
import '../css/TodoItem.css';

function TodoItem(props) {
    
  return (
    <>
    <li className="TodoItem">
    <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}><i className="fa-solid fa-check"></i></span>
    <p onClick={props.onComplete} className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text} </p>
    <span className="Icon Icon-delete" onClick={props.onDelete}><i className="fa-solid fa-trash-can"></i></span>
    </li>
   
    </>
  );
}

export { TodoItem };