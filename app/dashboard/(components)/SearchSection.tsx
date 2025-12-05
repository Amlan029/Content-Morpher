import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='flex flex-col justify-center items-center p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-indigo-500'>
        <h2 className='text-3xl'>Browse All Templates</h2>
        <p>What you would like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-full bg-white text-zinc-950  '>
                <Search/>
                <input 
                onChange={(e)=> onSearchInput(e.target.value)}
                type="text" placeholder="Search.." className="bg-transperent outline-none"/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection