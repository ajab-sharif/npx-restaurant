import Image from "next/image";
import Link from "next/link";

function CartIcon() {
  return (
    <Link href="/cart" className="flex items-center gap-1">
      <span>cart (3)</span>
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
    </Link>
  );
}

export default CartIcon;
