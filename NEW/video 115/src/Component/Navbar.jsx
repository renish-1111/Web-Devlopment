import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li> <a href="/login">Login</a></li>
        </div>
    )
}

export default Navbar
