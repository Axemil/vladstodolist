import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header-todo'>
      <h1>Todo list</h1>
      <Link className='link-router' to='/'>Home</Link>|<Link className='link-router' to='/about'>About</Link>
    </header>
  )
}
