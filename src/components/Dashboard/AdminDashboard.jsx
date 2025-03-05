import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTsk from '../others/AllTsk'

function AdminDashboard() {
  return (
    <div className=' h-screen w-full p-7'>

  <Header/>
  <CreateTask/>
  <AllTsk/>
    </div>
  )
}

export default AdminDashboard