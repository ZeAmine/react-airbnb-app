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
        <link
          rel="icon"
          href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMiIgZmlsbD0iY3VycmVudGNvbG9yIiBzdHlsZT0iZGlzcGxheTpibG9jayI+PHBhdGggZD0iTTI5LjI0IDIyLjY4Yy0uMTYtLjM5LS4zMS0uOC0uNDctMS4xNWwtLjc0LTEuNjctLjAzLS4wM2MtMi4yLTQuOC00LjU1LTkuNjgtNy4wNC0xNC40OGwtLjEtLjJjLS4yNS0uNDctLjUtLjk5LS43Ni0xLjQ3LS4zMi0uNTctLjYzLTEuMTgtMS4xNC0xLjc2YTUuMyA1LjMgMCAwMC04LjIgMGMtLjQ3LjU4LS44MiAxLjE5LTEuMTQgMS43Ni0uMjUuNTItLjUgMS4wMy0uNzYgMS41bC0uMS4yYy0yLjQ1IDQuOC00Ljg0IDkuNjgtNy4wNCAxNC40OGwtLjA2LjA2Yy0uMjIuNTItLjQ4IDEuMDYtLjczIDEuNjQtLjE2LjM1LS4zMi43My0uNDggMS4xNWE2LjggNi44IDAgMDA3LjIgOS4yMyA4LjM4IDguMzggMCAwMDMuMTgtMS4xYzEuMy0uNzMgMi41NS0xLjc5IDMuOTUtMy4zMiAxLjQgMS41MyAyLjY4IDIuNTkgMy45NSAzLjMzQTguMzggOC4zOCAwIDAwMjIuNzUgMzJhNi43OSA2Ljc5IDAgMDA2Ljc1LTUuODMgNS45NCA1Ljk0IDAgMDAtLjI2LTMuNXptLTE0LjM2IDEuNjZjLTEuNzItMi4yLTIuODQtNC4yMi0zLjIyLTUuOTVhNS4yIDUuMiAwIDAxLS4xLTEuOTZjLjA3LS41MS4yNi0uOTYuNTItMS4zNC42LS44NyAxLjY1LTEuNDEgMi44LTEuNDFhMy4zIDMuMyAwIDAxMi44IDEuNGMuMjYuNC40NS44NC41MSAxLjM1LjEuNTguMDYgMS4yNS0uMSAxLjk2LS4zOCAxLjctMS41IDMuNzQtMy4yMSA1Ljk1em0xMi43NCAxLjQ4YTQuNzYgNC43NiAwIDAxLTIuOSAzLjc1Yy0uNzYuMzItMS42LjQxLTIuNDIuMzItLjgtLjEtMS42LS4zNi0yLjQyLS44NGExNS42NCAxNS42NCAwIDAxLTMuNjMtMy4xYzIuMS0yLjYgMy4zNy00Ljk3IDMuODUtNy4wOC4yMy0xIC4yNi0xLjkuMTYtMi43M2E1LjUzIDUuNTMgMCAwMC0uODYtMi4yIDUuMzYgNS4zNiAwIDAwLTQuNDktMi4yOGMtMS44NSAwLTMuNS44Ni00LjUgMi4yN2E1LjE4IDUuMTggMCAwMC0uODUgMi4yMWMtLjEzLjg0LS4xIDEuNzcuMTYgMi43My40OCAyLjExIDEuNzggNC41MSAzLjg1IDcuMWExNC4zMyAxNC4zMyAwIDAxLTMuNjMgMy4xMmMtLjgzLjQ4LTEuNjIuNzMtMi40Mi44M2E0Ljc2IDQuNzYgMCAwMS01LjMyLTQuMDdjLS4xLS44LS4wMy0xLjYuMjktMi41LjEtLjMyLjI1LS42NC40MS0xLjAyLjIyLS41Mi40OC0xLjA2LjczLTEuNmwuMDQtLjA3YzIuMTYtNC43NyA0LjUyLTkuNjQgNi45Ny0xNC40MWwuMS0uMmMuMjUtLjQ4LjUtLjk5Ljc2LTEuNDcuMjYtLjUxLjU0LTEgLjktMS40YTMuMzIgMy4zMiAwIDAxNS4wOSAwYy4zNS40LjY0Ljg5LjkgMS40LjI1LjQ4LjUgMSAuNzYgMS40N2wuMS4yYzIuNDQgNC43NyA0LjggOS42NCA3IDE0LjQxbC4wMy4wM2MuMjYuNTIuNDggMS4xLjczIDEuNi4xNi4zOS4zMi43LjQyIDEuMDMuMTkuOS4yOSAxLjcuMTkgMi41eiIvPjwvc3ZnPg=="
        />
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

        <section className="mt-7 mb-10">
          <h1 className="text-3xl font-bold">Chez vous, partout</h1>
          <div className="flex scroll-snap-type space-x-4 xl:space-x-9 2xl:space-x-16 mt-6 overflow-x-scroll scrollbar-hide p-2 xl:p-4">
            {cardsData.map((item, index) => (
              <MediumCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/*overflow-x-scroll scrollbar-hide p-2*/}

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
