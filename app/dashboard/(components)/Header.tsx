
import { SignedIn,  UserButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react';
// import { Search } from 'lucide-react'
import Link from 'next/link'


function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-between gap-1 items-center p-5 border-b-2 border-zinc-500 shadow-sm bg-transparent/30 backdrop-blur-sm">
      {/* <div className="flex items-center gap-2 border rounded-full p-2 max-w-md">
        <Search />
        <input className="outline-none" type="text" placeholder="Search..." />
      </div> */}
      <div>
        <h2 className="bg-indigo-500 p-2 rounded-md text-xs px-2 hover:scale-108 hover:transition duration-300">
          🔥Join Membership just for ₹99/month
        </h2>
      </div>
      <div>
        <SignedIn>
          <Link href={"/dashboard/user-profile"}>
            {/* <UserAvatar/> */}
            <UserButton/>
          </Link>
        </SignedIn>
      </div>
      {/* <div>
        <SignedIn>
          <Link href={"/"}>
            <SignOutButton>
              <Button><LogOut/> Logout</Button>
            </SignOutButton>
            
          </Link>
        </SignedIn>
      </div> */}
    </div>
  );
}

export default Header