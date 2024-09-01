import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";

function Navbar() {
  const user = true;
  return (
    <div className="h-12 flex items-center justify-between border-b-2 border-b-red-500 p-4 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* left links */}
      <div className="hidden md:flex gap-4  md:items-center flex-1 upsercase">
        <Link href="/">homepage</Link>
        <Link href="/menu">menu</Link>
        <Link href="/contact">contact</Link>
      </div>
      {/* logo */}
      <div className="text-xl md:font-bold flex-1 text-center">
        <Link href={"/"}>Massimo</Link>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* right links */}
      <div className="hidden md:flex gap-4 capitalize items-center flex-1 justify-end">
        <div className="flex items-center gap-2 bg-orange-300 px-1 rounded-md absolute top-3 r-2">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>983 832 82</span>
        </div>
        {!user ? (
          <Link href={"/login"}>login</Link>
        ) : (
          <Link href={"/orders"}>orders</Link>
        )}
        <Link href={"/cart"}>
          <CartIcon />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
