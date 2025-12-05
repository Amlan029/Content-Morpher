"use client"
import { Button } from '@/components/ui/button'
import { useContext, useEffect, useRef } from 'react'
import { HistoryItem } from '../history/page';
import { useUser } from '@clerk/nextjs';
import { TotalUsageContext } from '@/app/(context)/TotalUsageCredit';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

function UsageTrack() {
  const { user } = useUser();
  const hasFetched = useRef(false);

  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription,  setUserSubscription} = useContext(UserSubscriptionContext);

  //Set total credits  according to Subscription
  const maxWords = userSubscription ? 100000 : 10000;

  useEffect(() => {
    if (!user) return;
    checkSub()
    if (!hasFetched.current) {
      loadData();
      hasFetched.current = true;
    }
  }, [user]);
  
  const loadData = async () => {
    try {
      const res = await fetch("/api/GetUsage");
      if (!res.ok) throw new Error("Failed to load Usage");
      const data = await res.json();
      GetTotalUsage(data);
    } catch (err) {
      console.error(err);
    }
  };
  //load used credits on every reload
  const GetTotalUsage = (data: HistoryItem[]) => {
    let total = 0;
    data.forEach((element) => {
      total += Number(element.aiResponse?.trim().split(/\s+/).length);
    });
    setTotalUsage(total);
  };
  //check user is subscribed or not
  const checkSub = async () => {
      try {
        const res = await fetch("/api/GetUserSubscription"); // you implement this
        if (!res.ok) throw new Error("Failed to check User Subscription");

        const data = await res.json(); // e.g. { isSubscribed: true }
        setUserSubscription(data.isSubscribed);
      } catch (e) {
        console.error("Failed to fetch subscription status", e);
      }
    };

  return (
    <div>
      <div className='bg-indigo-500 rounded-lg pb-5 p-3'>
        <h2>Credits</h2>
        <div className='w-full bg-[#9981f9] rounded-full h-2'>
          <div
            className='h-2 rounded-full bg-white'
            style={{
              width: (totalUsage / maxWords) * 100 + "%"
            }}
          ></div>
          <h2 className='text-sm tracking-tighter'>
            {totalUsage}/{maxWords} credit used
          </h2>
        </div>
      </div>
      <Button variant={'outline'} className='w-full my-2'>
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
