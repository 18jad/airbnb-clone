import Image from "next/image";
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'
import { useState } from "react";

function InfoCard({img, location, title, description,star,price,total }) {

    const [heartColor, setHeartColor] = useState(true)
    
    return (
        <div className="flex py-7 rounded-xl px-4  shadow hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t my-4">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 cursor-pointer">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
            </div>

            <div className="flex flex-col flex-grow pl-5 ">
                <div className="flex justify-between items-center cursor-pointer">
                    <p>{location}</p>
                    <HeartIcon fill={heartColor ? 'transparent' : 'red'} className="h-7 transform transition duration-300" onClick={() => setHeartColor(!heartColor) }/>
                </div>
                <h4 className="text-xl cursor-pointer select-none">{title}</h4>
                <div className="border-b pt-2 w-10" />
                <p className="pt-2 text-sm text-gray-500 flex-grow hover:underline cursor-pointer">{description}</p>

                <div className="flex justify-between">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        { star}
                    </p>
                    <div>
                        <p  className="text-lg lg:text-2xl font-semibold pb-2">{ price}</p>
                        <p className="text-right font-extralight">{ total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
