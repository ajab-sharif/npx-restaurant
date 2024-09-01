"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "homepage", url: "/" },
  { id: 2, title: "menu", url: "/menu" },
  { id: 3, title: "working hours", url: "/" },
  { id: 4, title: "contact", url: "/contact" },
];

function Menu() {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      <div className="cursor-pointer">
        {!open ? (
          <Image
            alt=""
            src={"/open.png"}
            width={20}
            height={20}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            alt=""
            src={"/close.png"}
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col justify-start items-center gap-3 text-xl capitalize z-10 py-4">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href={"/login"} key={"login"} onClick={() => setOpen(false)}>
              login
            </Link>
          ) : (
            <Link
              href={"/orders"}
              key={"orders"}
              onClick={() => setOpen(false)}
            >
              orders
            </Link>
          )}
          <Link href={"/cart"} key={"cart"} onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
