import Headers from "../components/Headers";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import Live from "../components/Live";
import Hosting from "../components/Hosting";
import { discover, live, places } from "../data";

export default function Home() {
  return (
    <>
      <Headers />
      <Banner />
      <main className="max-w-[120rem] mx-auto pt-16 sm:px-10 md:px-10 lg:px-20 xl:px-20">
        <Explore {...places} />
        <Live {...live} />
        <Live {...discover} />
        <Hosting
          img="/images/host.jpg"
          title="Je deviens hôte"
          description="Gagnez un revenu complémentaire et saisissez de nouvelles opportunités
          en louant votre logement."
          buttonText="En savoir plus"
        />
      </main>
      <Footer />
    </>
  );
}

// // export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );
//
//   const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
//     res.json()
//   );
//   return {
//     props: {
//       exploreData,
//       cardsData,
//     },
//   };
// }
