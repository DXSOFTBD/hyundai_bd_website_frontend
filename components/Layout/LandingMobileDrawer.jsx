"use client";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import Logo from "@/public/logo/Logo.png";




/** main component */
const LandingMobileDrawer = () => {
  const [open, setOpen] = useState(false);
  const date = new Date().getFullYear();

  return (
    <div className="">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <Drawer
        transitionDuration={700}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="w-80 p-5 bg-[#222121] h-full">
          <div className="flex justify-between items-center pb-2 border-b">
            {/* <Image className="w-20" src={Logo} alt="" priority /> */}

            logo

            <CloseIcon
              className="cursor-pointer text-white"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul>
            <div>
              {/* Pass setOpen to MenuData */}
              <MenuData setOpen={setOpen} />
            </div>
          </ul>
          <div>
            <p className="text-left text-white absolute bottom-12">
              © {date}, All Rights Reserved by DXNE
            </p>
            <div className="absolute bottom-6 text-left">
              <Link
                href="https://www.numatrix.co/"
                className="relative group cursor-pointer"
              >
                <span className=" text-white">
                  Design & Developed by
                  <span className="text-xl font-bold text-blue-500  pl-[5px]">
                    N
                  </span>
                  <span className="text-xl font-bold">umatrix</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};


export default LandingMobileDrawer;

export const MenuData = ({ setOpen }) => {

  const [loading, setLoading] = useState(true);
  const router = useRouter();
  return (
    <div>
      <ul className="mt-4">
       

        {/* Close drawer on other sections as well */}
        <li className="py-4 shadow-md shadow-white pl-4">
          <Link
            href="/about"
            className={
              router.asPath === "/about"
                ? "text-[18px] font-medium text-red-600"
                : "text-[18px] font-medium text-white"
            }
            onClick={() => setOpen(false)} // Close drawer
          >
            About Us
          </Link>
        </li>
        <li className="py-4 shadow-md shadow-white pl-4 mt-1">
          <Link
            href="/iccheghuri"
            className={
              router.asPath === "/iccheghuri"
                ? "text-[18px] font-medium text-red-600"
                : "text-[18px] font-medium text-white"
            }
            onClick={() => setOpen(false)} // Close drawer
          >
            Iccheghuri
          </Link>
        </li>
        <li className="py-4 shadow-md shadow-white pl-4 mt-1">
          <Link
            href="/our-presence"
            className={
              router.asPath === "/our-presence"
                ? "text-[18px] font-medium text-red-600"
                : "text-[18px] font-medium text-white"
            }
            onClick={() => setOpen(false)} // Close drawer
          >
            Our Presence
          </Link>
        </li>
        <li className="py-4 shadow-md shadow-white pl-4 mt-1">
          <Link
            href="/our-brand"
            className={
              router.asPath === "/our-brand"
                ? "text-[18px] font-medium text-red-600"
                : "text-[18px] font-medium text-white"
            }
            onClick={() => setOpen(false)} // Close drawer
          >
            Brand
          </Link>
        </li>
      </ul>
    </div>
  );
};

