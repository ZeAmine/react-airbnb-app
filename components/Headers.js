import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";

const Headers = () => {
  return (
    <header className="sticky top-0 shadow-md bg-white z-50">
      <div className="grid grid-cols-3 max-w-[120rem] mx-auto z-50 py-4 sm:px-10 md:px-10 lg:px-20 xl:px-20">
        {/*Left*/}
        <div className="relative flex items-center h-10 w-24 cursor-pointer my-auto">
          <Image
            // src="https://links.papareact.com/qd3"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDIiIGhlaWdodD0iMzIiIGZpbGw9ImN1cnJlbnRjb2xvciIgc3R5bGU9ImRpc3BsYXk6YmxvY2siPjxwYXRoIGQ9Ik0yOS4yNCAyMi42OGMtLjE2LS4zOS0uMzEtLjgtLjQ3LTEuMTVsLS43NC0xLjY3LS4wMy0uMDNjLTIuMi00LjgtNC41NS05LjY4LTcuMDQtMTQuNDhsLS4xLS4yYy0uMjUtLjQ3LS41LS45OS0uNzYtMS40Ny0uMzItLjU3LS42My0xLjE4LTEuMTQtMS43NmE1LjMgNS4zIDAgMDAtOC4yIDBjLS40Ny41OC0uODIgMS4xOS0xLjE0IDEuNzYtLjI1LjUyLS41IDEuMDMtLjc2IDEuNWwtLjEuMmMtMi40NSA0LjgtNC44NCA5LjY4LTcuMDQgMTQuNDhsLS4wNi4wNmMtLjIyLjUyLS40OCAxLjA2LS43MyAxLjY0LS4xNi4zNS0uMzIuNzMtLjQ4IDEuMTVhNi44IDYuOCAwIDAwNy4yIDkuMjMgOC4zOCA4LjM4IDAgMDAzLjE4LTEuMWMxLjMtLjczIDIuNTUtMS43OSAzLjk1LTMuMzIgMS40IDEuNTMgMi42OCAyLjU5IDMuOTUgMy4zM0E4LjM4IDguMzggMCAwMDIyLjc1IDMyYTYuNzkgNi43OSAwIDAwNi43NS01LjgzIDUuOTQgNS45NCAwIDAwLS4yNi0zLjV6bS0xNC4zNiAxLjY2Yy0xLjcyLTIuMi0yLjg0LTQuMjItMy4yMi01Ljk1YTUuMiA1LjIgMCAwMS0uMS0xLjk2Yy4wNy0uNTEuMjYtLjk2LjUyLTEuMzQuNi0uODcgMS42NS0xLjQxIDIuOC0xLjQxYTMuMyAzLjMgMCAwMTIuOCAxLjRjLjI2LjQuNDUuODQuNTEgMS4zNS4xLjU4LjA2IDEuMjUtLjEgMS45Ni0uMzggMS43LTEuNSAzLjc0LTMuMjEgNS45NXptMTIuNzQgMS40OGE0Ljc2IDQuNzYgMCAwMS0yLjkgMy43NWMtLjc2LjMyLTEuNi40MS0yLjQyLjMyLS44LS4xLTEuNi0uMzYtMi40Mi0uODRhMTUuNjQgMTUuNjQgMCAwMS0zLjYzLTMuMWMyLjEtMi42IDMuMzctNC45NyAzLjg1LTcuMDguMjMtMSAuMjYtMS45LjE2LTIuNzNhNS41MyA1LjUzIDAgMDAtLjg2LTIuMiA1LjM2IDUuMzYgMCAwMC00LjQ5LTIuMjhjLTEuODUgMC0zLjUuODYtNC41IDIuMjdhNS4xOCA1LjE4IDAgMDAtLjg1IDIuMjFjLS4xMy44NC0uMSAxLjc3LjE2IDIuNzMuNDggMi4xMSAxLjc4IDQuNTEgMy44NSA3LjFhMTQuMzMgMTQuMzMgMCAwMS0zLjYzIDMuMTJjLS44My40OC0xLjYyLjczLTIuNDIuODNhNC43NiA0Ljc2IDAgMDEtNS4zMi00LjA3Yy0uMS0uOC0uMDMtMS42LjI5LTIuNS4xLS4zMi4yNS0uNjQuNDEtMS4wMi4yMi0uNTIuNDgtMS4wNi43My0xLjZsLjA0LS4wN2MyLjE2LTQuNzcgNC41Mi05LjY0IDYuOTctMTQuNDFsLjEtLjJjLjI1LS40OC41LS45OS43Ni0xLjQ3LjI2LS41MS41NC0xIC45LTEuNGEzLjMyIDMuMzIgMCAwMTUuMDkgMGMuMzUuNC42NC44OS45IDEuNC4yNS40OC41IDEgLjc2IDEuNDdsLjEuMmMyLjQ0IDQuNzcgNC44IDkuNjQgNyAxNC40MWwuMDMuMDNjLjI2LjUyLjQ4IDEuMS43MyAxLjYuMTYuMzkuMzIuNy40MiAxLjAzLjE5LjkuMjkgMS43LjE5IDIuNXpNNDEuNTQgMjQuMTJhNS4wMiA1LjAyIDAgMDEtMy45NS0xLjgzIDYuNTUgNi41NSAwIDAxLTEuNi00LjQ4IDYuOTYgNi45NiAwIDAxMS42Ni00LjU4IDUuMyA1LjMgMCAwMTQuMDgtMS44NiA0LjMgNC4zIDAgMDEzLjcgMS45MmwuMS0xLjU3aDIuOTJWMjMuOGgtMi45M2wtLjEtMS43NmE0LjUyIDQuNTIgMCAwMS0zLjg4IDIuMDh6bS43Ni0yLjg4Yy41OCAwIDEuMDktLjE2IDEuNTctLjQ1LjQ0LS4zMi44LS43NCAxLjA4LTEuMjUuMjUtLjUxLjM4LTEuMTIuMzgtMS44YTMuNDIgMy40MiAwIDAwLTEuNDctMy4wNCAyLjk1IDIuOTUgMCAwMC0zLjEyIDBjLS40NC4zMi0uOC43NC0xLjA4IDEuMjVhNC4wMSA0LjAxIDAgMDAtLjM4IDEuOCAzLjQyIDMuNDIgMCAwMDEuNDcgMy4wNGMuNDcuMjkuOTguNDUgMS41NS40NXpNNTMuNDUgOC40NmMwIC4zNS0uMDYuNjctLjIyLjkzLS4xNi4yNS0uMzguNDgtLjY3LjY0LS4yOS4xNi0uNi4yMi0uOTIuMjItLjMyIDAtLjY0LS4wNi0uOTMtLjIyYTEuODQgMS44NCAwIDAxLS42Ny0uNjQgMS44MiAxLjgyIDAgMDEtLjIyLS45M2MwLS4zNi4wNy0uNjguMjItLjkzLjE2LS4zLjM5LS40OC42Ny0uNjQuMjktLjE2LjYtLjIzLjkzLS4yM2ExLjg0IDEuODQgMCAwMTEuNi44NiAyIDIgMCAwMS4yMS45NHptLTMuNCAxNS4zVjExLjdoMy4xOHYxMi4wOGgtMy4xOXptMTEuNjgtOC45di4wNGMtLjE1LS4wNy0uMzUtLjEtLjUtLjEzLS4yLS4wNC0uMzYtLjA0LS41NS0uMDQtLjg5IDAtMS41Ni4yNi0yIC44LS40OC41NS0uNyAxLjMyLS43IDIuMzF2NS45M2gtMy4xOVYxMS42OWgyLjkzbC4xIDEuODNjLjMyLS42NC43LTEuMTIgMS4yNC0xLjQ4YTMuMSAzLjEgMCAwMTEuODEtLjVjLjIzIDAgLjQ1LjAyLjY0LjA2LjEuMDMuMTYuMDMuMjIuMDZ2My4yem0xLjI4IDguOVY2Ljc0aDMuMTh2Ni41Yy40NS0uNTguOTYtMS4wMyAxLjYtMS4zOGE1LjAyIDUuMDIgMCAwMTYuMDggMS4zMSA2LjU1IDYuNTUgMCAwMTEuNiA0LjQ5IDYuOTYgNi45NiAwIDAxLTEuNjYgNC41OCA1LjMgNS4zIDAgMDEtNC4wOCAxLjg2IDQuMyA0LjMgMCAwMS0zLjctMS45MmwtLjEgMS41Ny0yLjkyLjAzem02LjE1LTIuNTJjLjU3IDAgMS4wOC0uMTYgMS41Ni0uNDUuNDQtLjMyLjgtLjc0IDEuMDgtMS4yNS4yNi0uNTEuMzgtMS4xMi4zOC0xLjggMC0uNjctLjEyLTEuMjgtLjM4LTEuNzlhMy43NSAzLjc1IDAgMDAtMS4wOC0xLjI1IDIuOTUgMi45NSAwIDAwLTMuMTIgMGMtLjQ1LjMyLS44Ljc0LTEuMDkgMS4yNWE0LjAxIDQuMDEgMCAwMC0uMzggMS44IDMuNDIgMy40MiAwIDAwMS40NyAzLjA0Yy40Ny4yOS45OC40NSAxLjU2LjQ1em03LjUxIDIuNTNWMTEuNjloMi45M2wuMSAxLjU3YTMuOTYgMy45NiAwIDAxMy41NC0xLjg5IDQuMSA0LjEgMCAwMTMuODIgMi40NGMuMzUuNzYuNTQgMS43LjU0IDIuNzV2Ny4yNGgtMy4xOXYtNi44MmMwLS44NC0uMTktMS41LS41Ny0xLjk5LS4zOC0uNDgtLjktLjc0LTEuNTYtLjc0LS40OCAwLS45LjEtMS4yNy4zMi0uMzUuMjMtLjY0LjUyLS44Ni45M2EyLjcgMi43IDAgMDAtLjMyIDEuMzV2Ni45MmgtMy4xNnptMTIuNTIgMFY2LjczaDMuMTl2Ni41YTQuNjcgNC42NyAwIDAxMy43My0xLjg5IDUuMDIgNS4wMiAwIDAxMy45NSAxLjgzIDYuNTcgNi41NyAwIDAxMS41OSA0LjQ4IDYuOTUgNi45NSAwIDAxLTEuNjYgNC41OCA1LjMgNS4zIDAgMDEtNC4wOCAxLjg2IDQuMyA0LjMgMCAwMS0zLjctMS45MmwtLjA5IDEuNTctMi45My4wM3ptNi4xOC0yLjUzYy41OCAwIDEuMDktLjE2IDEuNTYtLjQ1LjQ1LS4zMi44LS43NCAxLjA5LTEuMjUuMjUtLjUxLjM4LTEuMTIuMzgtMS44YTMuNDIgMy40MiAwIDAwLTEuNDctMy4wNCAyLjk1IDIuOTUgMCAwMC0zLjEyIDBjLS40NC4zMi0uOC43NC0xLjA4IDEuMjVhMy42MyAzLjYzIDAgMDAtLjM4IDEuOCAzLjQyIDMuNDIgMCAwMDEuNDcgMy4wNGMuNDcuMjkuOTUuNDUgMS41NS40NXoiLz48L3N2Zz4="
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        {/*Middle*/}
        <div className="relative flex items-center max-w-xs rounded-full py-2 pl-2 pr-2 lg:border border-gray-300 lg:shadow lg:bg-white">
          <input
            type="text"
            placeholder="Commencez votre recherche..."
            className="outline-none flex-grow text-[15px] font-medium text-gray-900 placeholder-black pl-4 w-full h-full rounded-full bg-transparent"
          />
          <SearchIcon className="hidden h-8 color-white bg-red-500 text-white rounded-full p-2 cursor-pointer lg:inline-flex" />
        </div>

        {/*Right*/}
        <div className="flex justify-end items-center space-x-5 text-black">
          <div className="hidden lg:inline text-[15px] font-medium rounded-full cursor-pointer">
            Devenez hôte
          </div>
          <GlobeAltIcon className="h-5 rounded-full cursor-pointer" />
          <div className="flex items-center space-x-2 border border-gray-300 rounded-full py-1 pl-3 pr-1 bg-white hover:shadow-md transition duration-300 cursor-pointer">
            <MenuIcon className="h-5" />
            <UserCircleIcon className="h-8" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
