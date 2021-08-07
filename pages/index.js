import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import { motion } from 'framer-motion';



export default function Home({ exploreData, cardsData }) {
  const fadeLeft = {
    hidden : { opacity: 0, x: -100 },
    visible : {opacity:1, x: 0}
  }
  return (
    <div className="">
      <Head>
        <title>Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Explore Nearby Section */}
        <section className="pt-6">
          <motion.h2
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{duration:1}}
            className="text-4xl font-semibold font pb-5">Explore nearby</motion.h2>
      {/* Fetching Data */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{duration:1}}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard
            key={item.img}
            img={item.img}
            distance={item.distance}
            location={item.location} />
            )) }
          </motion.div>
        </section>
      {/* Live Anywhere Section */}
        <section>
          <motion.h2
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{duration:1}}
            className="text-4xl font-semibold font py-8">Live anywhere</motion.h2>
          <div className="flex image-scrollbar space-x-3 overflow-x-scroll overflow-y-hidden p-3 scrollbar-hide">
          {cardsData?.map(({img, title}) => (
            <MediumCard
            key={img}
            img={img}
            title={title}
            />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Whishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json());


  return {
    props: {
      exploreData,
      cardsData,

    }
  }
}
