import { SignIn } from '@clerk/nextjs'
import toast from 'react-hot-toast';
export default function Page() {
  return(
    <div className='flex items-center justify-center h-screen dark:bg-zinc-950  shadow-lg shadow-indigo-500'>
      <SignIn
       
      />
      

    </div>
  ) 
  
  
}