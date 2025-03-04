import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between h-16 px-4 bg-slate-900 text-white'>
        <h1 className='text-2xl font-medium'>Hello ,<br/><span className='text-3xl font-semibold'>Kumar 👋</span></h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Header