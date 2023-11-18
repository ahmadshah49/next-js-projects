import Image from "next/image"


const Header4 = () => {
    return (
        <div className="flex items-center justify-between px-8 border border-gray-300 rounded-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image src={"/fire.jpg"}
                        width={100} height={200} />
                    <div>
                        <h1 className="text-xl font-bold">Get access to exclusive deals</h1>
                        <p className="text-gray-500">Only the best deals reach your inbox
                        </p>
                    </div>
                </div>
            </div>
            <div>
                    <input type="text" placeholder="e.g.,jhon@gmail.com" className="h-12 border rounded-lg px-4 outline-none" />
                    <button className="mx-4 bg-[#F25454] hover:bg-[#f04040] duration-300 h-12 px-4 rounded-lg text-white">Notify Me</button>
                </div>
        </div>
    )
}

export default Header4