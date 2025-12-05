"use client"
import { TEMPLATE } from '../../(components)/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface PROPS{
    selectedTemplate?:TEMPLATE,
    userFormInput:any,
    loading: boolean
}
function FormSection({selectedTemplate,userFormInput, loading}:PROPS) {
    const onSubmit = (e:any)=>{
        e.preventDefault();
        userFormInput(formData)
        
    }
    const [formData,setFormData] = useState<any>()
    const handleInputChange = (event:any)=>{
        const {name, value} = event.target;
        setFormData({...formData,[name]:value})
    }
  return (
    <div className="p-5 rounded-md  border shadow-lg shadow-indigo-500 bg-zinc-400">
      {selectedTemplate?.icon && (
        <Image src={selectedTemplate.icon} height={70} width={70} alt="icon" />
      )}
      <h2 className="font-semibold text-2xl text-indigo-600 ">
        {selectedTemplate?.name}
      </h2>
      <p className="text-zinc-900 text-md">{selectedTemplate?.desc}</p>

      <form className='text-zinc-900' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label className='text-zinc-800 font-bold '>{item.label}</label>
            {item.field == "input" ? (
              <Input 
              className='text-zinc-900 outline-none bg-white' 
              name={item.name} 
              required={item.required}
              onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea 
              className='text-zinc-900 outline-none bg-white'
              onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button 
        type="submit" 
        className='text-white w-full py-6' 
        disabled={loading}>
          {loading?<Loader2 className='animate-spin'/>:"Generate Content"}
          
        </Button>
      </form>
    </div>
  );
}

export default FormSection