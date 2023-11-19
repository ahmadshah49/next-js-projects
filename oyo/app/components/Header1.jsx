import Image from 'next/image'

import Block from './block'
import { PiHandbag } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';


const Header1 = () => {
  return (
    <div className='flex items-center justify-between px-12 h-20 border-b border-gray-300 '>
     <Link href={"/"}>
     <Image
        src={"/logo.png"}
        width={400}
        height={400}
        className='w-28  h-28'
      />
     </Link>
      <Block className=" " heading={"OYO for Business"} title="Trusted by 5000 Corporates" icon={<PiHandbag size={25} />} />
      <Block heading={"List your property"} title="Start earning in 30 mins" icon={<BsBuildings size={25} />} />
      <Block heading={"45454545"} title="Call us to Book Now" icon={<FiPhone size={25} />} />

      <Link href={"/login"}><div className='flex font-semibold  border-l border-gray-200 h-20 items-center justify-center px-4'><span><CgProfile size={25} className='mx-2' /></span> Login/Signup</div></Link>

    </div>
  )
}

export default Header1