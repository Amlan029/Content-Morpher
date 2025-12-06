import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'



function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item.slug}>
      <div className='min-h-60 p-3 shadow-xl shadow-slate-900 rounded-md border bg-zinc-400 flex flex-col gap-2 cursor-pointer  hover:scale-105 transition-all duration-300 hover:shadow-indigo-500/50'>
        <Image src={item.icon} alt='ICON' width={50} height={50}/>
        <h2 className='font-medium text-lg text-indigo-700'>{item.name}</h2>
        <p className='text-zinc-950 line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
    
  )
}

export default TemplateCard
