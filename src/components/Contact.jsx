
import React from "react";
import { FaTelegram, FaWhatsapp, FaPhoneSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const links = [
    {
        id: 1,
        child: (
            <>
                <FaTelegram size={ 30 } /> Telegram
            </>
        ),
        href: "https://telegram.me/Mamasobirov",
        style: "rounded-tr-md",
    },
    {
        id: 2,
        child: (
            <>
                <FaWhatsapp size={ 30 } /> WhatsApp
            </>
        ),
        href: "https://wa.me/+998979950744",
        style: "rounded-tr-md",
    },
    {
        id: 3,
        child: (
            <>
                <FaPhoneSquare size={ 30 } />+998979950744
            </>
        ),

        style: "rounded-tr-md",
    },
    {
        id: 4,
        child: (
            <>
                <HiOutlineMail size={ 30 } /> mmamasobirov@mail.ru
            </>
        ),
        
        style: "rounded-tr-md",
    },
 
];
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact me
          </p>

        </div>

      
                  { links.map( ( { id, child, href, style, download } ) => (
                      <li
                          key={ id }
                          className={
                              "flex justify-between items-center w-72 h-14 px-4 rounded-md  hover:bg-blue-400 duration-300 bg-darkblue-500" +
                              " " +
                              style
                          }
                      >
                          <a
                              href={ href }
                              className="flex justify-between items-center w-full text-white"
                              download={ download }
                              target="_blank"
                              rel="noreferrer"
                          >
                              { child }
                          </a>
                      </li>
                  ) ) }
              


        </div>
      </div>

  );
};

export default Contact;
