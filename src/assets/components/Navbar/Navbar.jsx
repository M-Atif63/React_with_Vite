import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Buttons/Button'
import '../../../App.css'

function Navbar() {
  return (
    <div>
        <NavLink to={'/'}>
            <Button title='Home' />
        </NavLink>
        <NavLink to={'/about'}>
            <Button title='About' />
        </NavLink>
        <NavLink to={'/feedback'}>
            <Button title='Feedback' />
        </NavLink>
        <NavLink to={'/contact'}>
            <Button title='Contact' />
        </NavLink>
        <NavLink to={'/blogs'}>
            <Button title='Blogs' />
        </NavLink>
    </div>
  )
}

export default Navbar
