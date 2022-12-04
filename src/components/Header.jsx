import React from 'react'
import {BsYoutube} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'

export default function Header() {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex items-center pb-5 border-solid border-b-2 border-slate-600'>
      <div className='flex'>
        <BsYoutube className='text-red-500 w-8 h-8 text-3xl'/>
        <span className='text-2xl text-stone-50 pl-3'>Youtube</span>
      </div>
      <form onSubmit={onSubmit} className='mx-auto flex'>
        <input className='w-96 h-10 p-2' type='text' placeholder='Search...' />
        <button className='text-stone-50 h-10 px-2 bg-slate-500 text-xl'><BiSearch /></button>
      </form>
    </div>
  )
}
