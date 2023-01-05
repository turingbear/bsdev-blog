import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const SNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <Link href="/" className="text-[#40e0d0] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#40e0d0] mr-2" />
          Go to the website
        </Link>
        <div className="hidden md:flex p-2 rounded-lg justify-center items-center border-2 border-[#40e0d0]">
          <h1 className="font-bold text-[#f4f4f5] text-lg">
            BS-DEV Content Studio
          </h1>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};
export default SNavbar;
