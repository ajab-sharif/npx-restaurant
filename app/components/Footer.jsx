import Link from "next/link";

function Footer() {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between uppercase">
      <Link href="/" className="font-bold text-xl">
        Massimo
      </Link>
      <p>all rights reserved.</p>
    </div>
  );
}

export default Footer;
