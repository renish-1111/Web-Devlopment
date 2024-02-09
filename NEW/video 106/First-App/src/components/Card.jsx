import './Card.css'

import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <img src="https://imgs.search.brave.com/kc2qKavisi7k5WB_GUQh1_thN0epiKt6t_63emkSDgs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8x/Mi8yNy8xOS80MC9j/aGFpbi1saW5rLTcy/ODY0XzY0MC5qcGc" alt="" />
         <h1>{props.title}</h1>
         <p>{props.desc}</p>
    </div>
  )
}

export default Card