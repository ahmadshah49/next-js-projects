import Image from "next/image"
import Link from "next/link"

const Id = () => {
  return (
    <div className="w-full">
<Image src="https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg"
width={2000}
height={2000}
className="w-[60%] py-4 h-[400px]  mx-auto"/>
<div className="w-[60%] mx-auto ">
<h1 className="font-bold text-3xl py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit consequatur in ullam voluptas.</h1>
<p className="text-justify text-lg py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste recusandae repellendus dolorem laborum quas tempore quia, sint nihil, commodi corrupti, exercitationem fuga quisquam. Illum dolorum eos corporis labore ex!</p>
<div className="py-4"><span className='px-6 py-3 bg-blue-400 rounded-lg'> price :5660 Rs</span></div>
<p className="text-3xl font-bold py-4">Facilities : </p>
<ul className="flex text-xl  mb-4 justify-between">
  <li>Swimming Pool</li>
  <li>Dogs</li>
  <li>Garden</li>
  <li>Loundry</li>
  <li>Cricket</li>
</ul>
<Link href={"/"} className="py-4"><div className="py-4"><span className='px-6 py-3 bg-red-400 rounded-lg'> Book Now</span></div></Link>
</div>
    </div>
  )
}

export default Id