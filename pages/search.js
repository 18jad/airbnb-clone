import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuMb from "../components/Menu"
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'
import InfoCard from "../components/InfoCard";


function Search({ searchResults }) {

    const router = useRouter();
    const { location, startDate, endDate, noOfGuest } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1);


    return (
        <div>
            <Header placeholder={`${formattedLocation} | ${formattedStartDate} | ${formattedEndDate} | ${noOfGuest} Guests`} />
            <main className="flex items-center">
                <section className="flex-grow mt-3 px-6">
                    <div className="flex items-center mb-5 text-gray-500  w-16 cursor-pointer hover:text-gray-700 transition ease-out hover:animate-pulse" onClick={() => router.push("/") }>
                        <ChevronLeftIcon className="h-6" />
                        <p className="mr-2 text-md font-bold ">Back</p>
                    </div>
                    <p className="text-xs">300+ Stays - <span className="bg-gray-200 p-1 rounded-md cursor-default select-none">{formattedStartDate}</span> - <span className="bg-gray-200 p-1 rounded-md cursor-default select-none">{formattedEndDate}</span> - for {noOfGuest} Guests</p>
                    <h1 className="text-3xl font-semibold mt-5 mb-3">Stays on { formattedLocation }</h1>
                    <div className=" hidden md:inline-flex items-center overflow-hidden text-gray-800 whitespace-nowrap mb-5 space-x-3">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <MenuMb />
                <div className="flex flex-col">
                    {searchResults?.map(({img, location, title, description,star,price,total }) => (
                        <InfoCard
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}
                    </div>
                    <div className="hidden sm:inline">
                        <div className="flex mt-5 mb-5 items-center justify-center space-x-5">
                        <ChevronLeftIcon className="h-6 text-gray-200 cursor-not-allowed" />
                            <p className="bg-black text-white rounded-full p-2 w-10 flex items-center justify-center cursor-pointer">1</p>
                            <p className="bg-gray-100 rounded-full hover:shadow-md transition duration-100 p-2 w-10 flex items-center justify-center cursor-pointer">2</p>
                            <p className="bg-gray-100 hover:shadow-md transition duration-100 rounded-full  p-2 w-10 flex items-center justify-center cursor-pointer">3</p>
                            <p className="bg-gray-100 hover:shadow-md transition duration-100 rounded-full  p-2 w-10 flex items-center justify-center cursor-pointer">4</p>
                            <p className="bg-gray-100 rounded-full hover:shadow-md transition duration-100 p-2 w-10 flex items-center justify-center cursor-pointer">5</p>
                            <p className="bg-gray-100 rounded-full hover:shadow-md transition duration-100 p-2 w-10 flex items-center justify-center cursor-pointer">...</p>
                            <p className="bg-gray-100 rounded-full hover:shadow-md transition duration-100 p-2 w-10 flex items-center justify-center cursor-pointer">15</p>
                            <ChevronRightIcon className="h-6 cursor-pointer"/>
                        </div>
                        <div className="flex justify-center items-center text-sm mt-5 mb-20">
                            <p>1 – 20 of 300+ places to stay</p>
                        </div>
                    </div>
                </section>
                    <div>
                    </div>
                    
            </main>
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://bit.ly/3yyxxX9")
        .then(
            (res) => res.json()
    );
    
    return {
        props: {
            searchResults
        }
    }
}