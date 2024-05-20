import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <Link href="/">
        <h1 className="text-lg font-medium">LOGO</h1>
      </Link>
      <div className="flex gap-6">
        <Link href="/products" className="text-slate-500 hover:underline">
          Products
        </Link>
        <Link href="/pricing" className="text-slate-500 hover:underline">
          Pricing
        </Link>
        <Link href="/about" className="text-slate-500 hover:underline">
          About
        </Link>
      </div>
    </header>
  );
}
