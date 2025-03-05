import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1C1C1C] mt-5 rounded'>
    <form className='flex flex-wrap w-full items-start justify-between'>

      <div className='w-1/2'>
      <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
        <input type=' text' placeholder='employee name' className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>    
        </div>
      <div>
         <h3 className='text-sm text-gray-300 mb-0.5'>DATE</h3>
        <input className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' name='' id=''/>   
        </div>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Assigned To</h3>
        <input className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='emloyee name'/>   
        </div>
        <div>
         
        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input  className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design, dev,etc'/>   
        </div>
      </div>
        
        <div className='w-2/5 flex flex-col items-center'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
        <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-gray-400 border-[1px]' name='' id='' cols='30' rows='10'>
        </textarea> 
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 text-sm mt-4 w-full rounded-full'>Create Task</button> 
        </div>
       
      
            

       
        

    </form>
  </div> 
  )
}

export default CreateTask