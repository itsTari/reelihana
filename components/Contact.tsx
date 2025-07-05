import { footerItems, footerItems2 } from "@/constants";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <footer className=" bg-black/95 text-white p-5">
      <div className=" flex flex-col md:flex-row lg:flex-col gap-8 border-b py-4 border-b-gray-500 ">
        <ul className="grid grid-cols-2 lg:flex gap-6">
          {footerItems.map((item, index) => (
            <li key={index} className=" font-body font-bold uppercase text-xl text-[#C6A98D] ">
              {item}
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-2 lg:flex gap-5">
          {footerItems2.map((item, index) => (
            <li key={index} className="text-sm font-body text-gray-400">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-3xl flex py-12 gap-4 text-slate-300">
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-600 hover:border rounded-full hover:border-white transition-all duration-300 hover:scale-110" />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="hover:text-gray-500 transition-all duration-300 hover:scale-110" />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-red-600 transition-all duration-300 hover:scale-110" />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-green-600 transition-all duration-300 hover:scale-110" />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <FaSnapchat className="hover:text-yellow-300 transition-all duration-300 hover:scale-110" />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600 transition-all duration-300 hover:scale-110" />
        </Link>
      </div>
      <div className="text-sm text-gray-500">
        <p >
          &copy; {new Date().getFullYear()} Reelihana Studios. All rights
          reserved. | Crafted with care & creativity.
        </p>
        <span className="inline-block mt-1">
          call us on
          <a className="text-[#C6A98D] hover:underline px-1">
            09063213611 | 08107665430
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Contact;
