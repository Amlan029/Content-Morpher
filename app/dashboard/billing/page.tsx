"use client";

import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { useContext } from "react";
import toast from "react-hot-toast";

// this will be called AFTER successful payment
async function saveUserSubscription(args: { paymentId: string }) {
  const res = await fetch("/api/UserSubscription", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });

  if (!res.ok) {
    throw new Error("Failed to save user subscription");
  }

  return res.json();
}

function Page() {
  const { userSubscription} = useContext(
    UserSubscriptionContext
  );
  const createSubscription = async () => {
    try {
      const res = await fetch("/api/CreateSubscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to create subscription");
      const json = await res.json();
      const data = json.data // expect { id: "sub_xxx" }
      onPayment(data.id);
    } catch (err) {
      console.error(err);
    }
  };

  const onPayment = (subscripId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subscripId,
      name: "Content Morpher",
      description: "Monthly Subscription",

      handler: async (res: any) => {
        console.table("Razorpay success:", res);

        try {
          await saveUserSubscription({
            paymentId: res.razorpay_payment_id,
          });
          
          toast.success("Subscribed to Content Morpher Go");
        } catch (error) {
          console.error("Error saving subscription:", error);
        }
      },
    };
    //Used window:any type instead of declaring it globally to let TypeScript know about window.Razorpay
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* better way to load script in Next.js */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <div>
        <h2 className="text-3xl mb-4">Upgrade Your Plan To Go</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-5 text-center">
        <div className="w-90 h-55 p-3 border bg-zinc-900/80 rounded-lg shadow-lg hover:shadow-indigo-500 hover:scale-108 hover:duration-300">
          <h2 className="text-3xl font-extrabold">Free</h2>
          <p className="text-2xl">₹0 /month</p>
          <ul className="list-none mt-3 space-y-1 text-sm text-zinc-400">
            <li>10,000 Words/month</li>
            <li>Unlimited Copy</li>
            <li>30+ Templates</li>
          </ul>
          <Button className="p-5 mt-2 text-bold" variant={userSubscription ? "outline":"ghost"} disabled={!userSubscription}>
            {userSubscription?"Upgrade":"Currently Active"}
          </Button>
        </div>

        <div className="w-90 h-55 p-3 border bg-zinc-900/80 rounded-lg shadow-lg hover:shadow-indigo-500 hover:scale-108 hover:duration-300">
          <h2 className="text-3xl font-extrabold">Content Morpher Go</h2>
          <p className="text-2xl">₹399 /month</p>
          <ul className="list-none mt-3 space-y-1 text-sm text-zinc-400">
            <li>1,00,000 Words/month</li>
            <li>Unlimited Generation & Copy</li>
            <li>30+ Templates</li>
          </ul>
          <Button
            onClick={createSubscription}
            className="p-5 mt-2 text-bold"
            variant={userSubscription ? "ghost" : "outline"}
            disabled={userSubscription}
          >
            {userSubscription ? "Currently Active" : "Upgrade"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
