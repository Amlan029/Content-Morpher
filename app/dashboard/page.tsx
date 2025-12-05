"use client"
import { useState } from "react"
import SearchSection from "./(components)/SearchSection"
import TemplateListSection from "./(components)/TemplateListSection"

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div className="m-2">
      {/* Search Section */}
        <SearchSection onSearchInput={(value:string)=> setUserSearchInput(value)}/>
        
      {/* Template Section */}
        <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard