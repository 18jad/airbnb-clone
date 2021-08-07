import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuMb from "../components/Menu"
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'
import InfoCard from "../components/InfoCard";
import { motion } from 'framer-motion';
import Map from "../components/Map";
import Head from 'next/head'




function Search({ searchResults }) {

    const router = useRouter();
    const { location, startDate, endDate, noOfGuest } = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1);

    const fadeLeft = {
    hidden : { opacity: 0, x: -100 },
    visible : {opacity:1, x: 0}
  }


    return (
        <div>
            <Head>
             <title>{`Airbnb: ${formattedLocation} | ${formattedStartDate} | ${formattedEndDate} | ${noOfGuest} Guests `}</title>
             <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header placeholder={`${formattedLocation} | ${formattedStartDate} | ${formattedEndDate} | ${noOfGuest} Guests`} />
            <main className="flex items-center justify-center">
                <section className=" mt-3 px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex items-center mb-5 text-gray-500  w-16 cursor-pointer hover:text-gray-700 transition ease-out hover:animate-pulse" onClick={() => router.push("/")}>
                        <ChevronLeftIcon className="h-6" />
                        <p className="mr-2 text-md font-bold ">Back</p>
                    </motion.div>
                    <p className="text-xs">300+ Stays -
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration: 1}} 
                            className="bg-gray-200 p-1 rounded-md cursor-default select-none">{formattedStartDate}
                        </motion.span> -
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="bg-gray-200 p-1 rounded-md cursor-default select-none">{formattedEndDate}
                        </motion.span> - for {noOfGuest} Guests</p>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-semibold mt-5 mb-3">Stays on {formattedLocation}
                    </motion.h1>
                        <section className="max-w-[900px] h-[400px] map mb-6">
                        <Map searchResults={ searchResults} />
                        </section>
                    <motion.div 
                        variants={fadeLeft}
                        initial="hidden"
                        animate="visible"
                        transition={{duration:1}}
                        className="flex flex-col" className=" hidden md:inline-flex items-center overflow-hidden text-gray-800 whitespace-nowrap mb-5 space-x-3">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </motion.div>
                    <MenuMb />
                <motion.div 
                        variants={fadeLeft}
                        initial="hidden"
                        animate="visible"
                        transition={{duration:1}}
                        className="flex flex-col">
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
                    </motion.div>
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