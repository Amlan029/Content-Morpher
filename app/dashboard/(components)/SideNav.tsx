"use client";

import { FileClock, Home, Settings, WalletCards, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import UsageTrack from "./UsageTrack";

const MenuList = [
  { name: "Home", path: "/dashboard", icon: Home },
  { name: "History", path: "/dashboard/history", icon: FileClock },
  { name: "Billing", path: "/dashboard/billing", icon: WalletCards },
  { name: "Setting", path: "/dashboard/setting", icon: Settings },
];

// One shared menu component used in both desktop + mobile
function SidebarMenu({ onClickItem }: any) {
  const path = usePathname();

  return (
    <div>
      <div className="mt-10 space-y-2">
        {MenuList.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            onClick={onClickItem}
            className="block"
          >
            <div
              className={`flex items-center gap-2 p-2 mt-5 rounded-lg cursor-pointer hover:bg-indigo-500 ${
                path === menu.path
                  ? "bg-indigo-500 shadow-lg shadow-indigo-700"
                  : ""
              }`}
            >
              <menu.icon className="w-5 h-5" />
              <span>{menu.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full px-3 py-20">
        <UsageTrack />
      </div>
    </div>
  );
}

function SideNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔹 Mobile top bar (hamburger + logo) */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-zinc-700">
        <button onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
        <Image
          className="bg-transparent"
          src="/icon.png"
          alt="logo"
          width={40}
          height={40}
        />
      </div>

      {/* 🔹 Desktop sidebar (fixed) */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen shadow-sm p-5 border-r border-zinc-700 w-64 flex-col bg-[#020617]">
        <div className="flex justify-center border-b pb-4">
          <Image
            className="bg-transparent"
            src="/icon.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <SidebarMenu />
      </div>

      {/* 🔹 Mobile slide-in drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#020617] border-r border-zinc-700 transform transition-transform duration-200 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-700">
          <Image
            className="bg-transparent"
            src="/icon.png"
            alt="logo"
            width={60}
            height={60}
          />
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <SidebarMenu onClickItem={() => setOpen(false)} />
      </div>

      {/* 🔹 Dark overlay when mobile drawer is open */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default SideNav;
