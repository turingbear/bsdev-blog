import Image from "next/image"
import Link from "next/link"
import logoWhite from '../public/logoWhite.png'


function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src={logoWhite} width={150} height={150} objectFit='contain' alt="logo" />
        </Link>
      </div>
      <div className="hidden sm:flex">
        <Link
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#40e0d0] flex items-center rounded-full text-center"
          href="https://brendanshields.vercel.app/#contact"
        >
          Contact me to get your next project started
        </Link>
      </div>
    </header>
  );
}
export default Header