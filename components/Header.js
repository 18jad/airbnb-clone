import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon
    } from "@heroicons/react/solid"
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";
import { motion } from 'framer-motion';

function Header({ placeholder}) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuest, setNoOfGuest] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
        
    }

    const resetInput = () => {
        setSearchInput("")
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuest
            }
        })
    }

    return (
        <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration : 1}}   
            className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10">

            {/* Left */}
            <div onClick={() => router.push("/") } className="relative flex h-10 cursor-pointer items-center my-auto">
                <Image
                    src="https://bit.ly/3fIs74p"
                    height="120"
                    width = "200"
                    objectFit="contain"
                    objectPosition="left"
                    className="hover:animate-pulse"
                />
            </div>

            {/* Middle - Search */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration : 1}}   
                className="flex items-center border-2 w-min rounded-full py-2 search shadow-sm lg:w-full ">
                
                <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="outline-none flex-grow pl-5 bg-transparent text-sm  text-gray-600 font font-semibold placeholder-[#222222] " placeholder={placeholder || "Start your search"} />
                    <SearchIcon className="h-8 hover:animate-spin inline-flex md:inline-flex bg-[#FF385C] mr-1 text-white rounded-full p-2  md:mx-2 cursor-pointer" />
            </motion.div>

            {/* Right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration : 1}} 
                className="hidden sm:flex space-x-2 items-center justify-end text-gray-500  cursor-pointer">
                <p className="cursor-pointer hover:bg-gray-100 p-2 py-[10px] rounded-full hidden md:inline host">Become a host</p>
                <GlobeAltIcon className="h-9 hover:animate-spin inline cursor-pointer host hover:bg-gray-100 rounded-full p-2" />
                
                <div className="flex items-center border border-gray-300 transition duration-200 rounded-full option-header space-x-2  py-[5px] px-1">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-8 cursor-pointer"/>
                </div>
            </motion.div>
            {searchInput && 
                <motion.div 
                initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration : 1}} 
                className="flex flex-col col-span-3 sm:mx-auto shadow-md">
                <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#FF385C"]}
                    onChange={handleSelect}
                    className="bg-transparent"
                />
                <div className="flex items-center mb-4">
                    <h2 className="text-2xl flex-grow px-2">Number of Guests</h2>
                    <UsersIcon className="h-5" />
                    <input type="number" value={noOfGuest} onChange={(e) => setNoOfGuest(e.target.value)} min="1" className="w-12 pl-2 text-lg outline-none text-[#FF385C] cursor-default" />
                </div>
                <div className="flex border-t ">
                    <button className="flex-grow py-2 text-gray-500 font-semibold hover:bg-[#ff385d54] transition duration-150" onClick={resetInput}>Cancel</button>
                    <button onClick={search} className="flex-grow py-2 font-semibold text-[#FF385C] hover:bg-gray-200 transition duration-150"><div onClick={resetInput}>Search</div></button>
                    
                </div>
                    </motion.div>
            }     
        </motion.header>
    )
}

export default Header
