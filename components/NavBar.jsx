// import React from 'react'
import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    const { option, setOption} = useState('pokemon')
  return (
    <>
        <div className='navBar flex flex-col gap-1 border h-full w-fit'>
            <NavLink className={'text-left p-1'} to={'/home/pokemon'}>Pokemon</NavLink>
            <NavLink className={'text-left p-1'} to={'/home/palworld'}>Palworld</NavLink>
            <NavLink className={'text-left p-1'} to={'/home/moster-sanctuary'}>Monster Sanctuary</NavLink>
        </div>
    </>
  )
}
