import Image from 'next/image';
import logo from '../static/logo.png';

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover"
        src={logo}
        width={100}
        height={100}
        alt="logo"
      />
    </div>
  );
}
export default Logo;
