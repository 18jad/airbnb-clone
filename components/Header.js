import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon
    } from "@heroicons/react/solid"

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10">

            {/* Left */}
            <div className="relative flex h-10 cursor-pointer items-center my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle - Search */}
            <div className="flex items-center md:border-2 rounded-full py-2 search md:shadow-sm ">
                <input type="text" className="outline-none flex-grow pl-5 bg-transparent text-sm text-gray-600 font font-semibold placeholder-[#222222]" placeholder="Start your search..." />
                <SearchIcon className="h-8 hidden md:inline-flex bg-[#FF385C] text-white rounded-full p-2 md:mx-2 cursor-pointer" />
            </div>

            {/* Right */}
            <div className="flex space-x-2 items-center justify-end text-gray-500  cursor-pointer">
                <p className="cursor-pointer hover:bg-gray-100 p-2 py-[10px] rounded-full hidden md:inline host">Become a host</p>
                <GlobeAltIcon className="h-9 cursor-pointer host hover:bg-gray-100 rounded-full p-2" />
                
                <div className="flex items-center border border-gray-300 transition duration-200 rounded-full option-header space-x-2  py-[5px] px-1">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-8 cursor-pointer"/>
                </div>
            </div>

        </header>
    )
}

export default Header
