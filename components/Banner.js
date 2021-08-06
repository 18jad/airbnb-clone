import Image from "next/image"


function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px]">
            <Image
                src="https://bit.ly/3jqa4RC"
                layout="fill"
                objectFit= "cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-2xl lg:text-4xl text-white relative bottom-5 font-semibold">Not sure where to go? Perfect.</p>
                <button className="text-black bg-white px-10 py-3 shadow-md rounded-full my-3 hover:shadow-lg active:scale-90 transition duration-150 font-bold">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
