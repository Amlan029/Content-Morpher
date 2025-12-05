"use client"
import React, { useState } from "react";
import SideNav from "./(components)/SideNav";
import Header from "./(components)/Header";
import { TotalUsageContext } from "../(context)/TotalUsageCredit";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [totalUsage, setTotalUsage] = useState<Number>(0)
  const [userSubscription, setUserSubscription] = useState<Boolean>(false)
  return (
    <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{userSubscription, setUserSubscription}}>
        <div className="min-h-screen bg-[#020617] text-white flex flex-col md:flex-row">
      <SideNav />
      <div className="flex-1 md:ml-64">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </div>
      </UserSubscriptionContext.Provider>
    
    </TotalUsageContext.Provider>
  );
}
