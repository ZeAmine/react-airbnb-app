import React from "react";

const Footer = () => {
  return (
    <footer className="sm:px-10 md:px-12 lg:px-20 xl:px-20 mt-10 bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[110rem] mx-auto space-x-5 sm:space-x-0 sm:py-10 md:py-12 lg:py-14 xl:py-14 ">
        <div className="text-sm lg:px-3 sm:mb-14">
          <h5 className="text-xs font-bold mb-5">À PROPOS</h5>
          <ul className="space-y-4">
            <li className="hover:underline cursor-pointer">
              Fonctionnement d'Airbnb
            </li>
            <li className=" hover:underline cursor-pointer">Newsroom</li>
            <li className=" hover:underline cursor-pointer">Airbnb 2021</li>
            <li className=" hover:underline cursor-pointer">Investisseurs</li>
            <li className=" hover:underline cursor-pointer">Airbnb Plus</li>
            <li className=" hover:underline cursor-pointer">Airbnb Luxe</li>
            <li className=" hover:underline cursor-pointer">HotelTonight</li>
            <li className=" hover:underline cursor-pointer">Airbnb for Work</li>
            <li className=" hover:underline cursor-pointer">
              C'est possible, grâce aux hôtes
            </li>
            <li className=" hover:underline cursor-pointer">Carrières</li>
            <li className=" hover:underline cursor-pointer">
              Lettre des fondateurs
            </li>
          </ul>
        </div>
        <div className="flex-grow text-sm lg:px-3 sm:mb-14">
          <h5 className="text-xs font-bold mb-5">COMMUNAUTÉ</h5>
          <ul className="space-y-4">
            <li className=" hover:underline cursor-pointer">
              Diversité et intégration
            </li>
            <li className=" hover:underline cursor-pointer">Accessibilité</li>
            <li className=" hover:underline cursor-pointer">
              Partenaires Airbnb
            </li>
            <li className=" hover:underline cursor-pointer">
              Accueillez des réfugiés afghans
            </li>
            <li className=" hover:underline cursor-pointer">
              Parrainage de voyageurs
            </li>
            <li className=" hover:underline cursor-pointer">Airbnb.org</li>
          </ul>
        </div>
        <div className="flex-grow text-sm lg:px-3">
          <h5 className="text-xs font-bold mb-5">HÔTE</h5>
          <ul className="space-y-4">
            <li className=" hover:underline cursor-pointer">
              Héberger des voyageurs
            </li>
            <li className=" hover:underline cursor-pointer">
              Organiser une expérience en ligne
            </li>
            <li className=" hover:underline cursor-pointer">
              Organiser une expérience
            </li>
            <li className=" hover:underline cursor-pointer">
              Hébergement responsable
            </li>
            <li className=" hover:underline cursor-pointer">
              Centre de ressources
            </li>
            <li className=" hover:underline cursor-pointer">
              Community Center
            </li>
          </ul>
        </div>
        <div className="flex-grow text-sm lg:px-3">
          <h5 className="text-xs font-bold mb-5">ASSISTANCE</h5>
          <ul className="space-y-4">
            <li className=" hover:underline cursor-pointer">
              Nos mesures face au Covid-19
            </li>
            <li className=" hover:underline cursor-pointer">Centre d'aide</li>
            <li className=" hover:underline cursor-pointer">
              Options d'annulation
            </li>
            <li className=" hover:underline cursor-pointer">
              Service d'aide aux voisins
            </li>
            <li className=" hover:underline cursor-pointer">
              Centre de ressources
            </li>
            <li className=" hover:underline cursor-pointer">
              Confiance et sécurité
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
