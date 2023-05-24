import React from "react";
import houzing from "../assets /portfolio/Houzing.png";
import reviewwebb from "../assets /portfolio/reviewwebbapp.png";
import navbar from "../assets /portfolio/navbar.jpg";
import reactParallax from "../assets /portfolio/reactParallax.jpg";
import reactSmooth from "../assets /portfolio/reactSmooth.jpg";
import digitalClock from "../assets /portfolio/digitalclock.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: houzing,
      href: "https://houzingwebb.netlify.app/",
      title: "Houzing"
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: reviewwebb,
      href: "https://reviewwebbapp.netlify.app",
      title: "Review Webb App"
    },
    {
      id: 6,
      src: digitalClock,
      href: "https://miftohiddin.github.io/digitalClock/",
      title:"Digital Clock"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen max-md:pt-72 pt-64"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          { portfolios.map( ( { id, src, href, title } ) => (
            <div key={ id } className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={ src }
                alt=""
                className=" mt-3 rounded-md duration-200 hover:scale-105 h-52 w-full"
              />
              <div className=" mt-4 font-bold text-blue-400 text-3xl  justify-center w-full flex items-center">
                { title }
              </div>
              <div className="flex items-center justify-center">
                <a className="px-6 py-3 m-4 duration-200 hover:scale-105 " href={ href } target="_blank" rel="noreferrer">
                  Go to Website

                </a>


              </div>
            </div>
          ) ) }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
