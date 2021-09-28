import Head from "next/head";
import Headers from "../components/Headers";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb : locations de vacances, et plus encore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headers />
      <Banner />

      <main className="max-w-[120rem] mx-auto sm:px-10 md:px-10 lg:px-20 xl:px-20">
        <section className="mt-7 mb-12">
          <h1 className="text-3xl font-bold">Explorez les environs</h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-3">
            {exploreData.map((item, index) => (
              <SmallCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-7 mb-12">
          <h1 className="text-3xl font-bold">Chez vous, partout</h1>
          <div className="flex items-center space-x-4 mt-6">
            {cardsData.map((item, index) => (
              <MediumCard key={index} {...item} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="Je deviens hôte"
          description="Gagnez un revenu complémentaire et saisissez de nouvelles opportunités
          en louant votre logement."
          buttonText="En savoir plus"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
