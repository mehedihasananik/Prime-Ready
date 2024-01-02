"use client";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaPhone } from "react-icons/fa";
import { contacts, site_info } from "../../site/info";
import Image from "next/image";

const menu = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Concrete delivery",
        url: "/concrete-delivery",
    },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (
        <>
            <header className=" sticky top-0 bg-white z-[1000] shadow shadow-dark-50/10">
                <div className="w-full bg-pageBg ">
                    <div className="w-11/12 md:w-10/12 mx-auto py-3 flex justify-center md:justify-between items-center">
                        <h6 className=" text-dark text-sm font-medium text-center md:text-left">
                            {" "}
                            <span className="">
                                <i className="fa-brands fa-canadian-maple-leaf mr-2 text-dark text-base "></i>
                            </span>
                            TORONTO READY MIX
                        </h6>
                        <div className="md:flex md:flex-row justify-end items-center hidden">
                            <Link
                                href={"/blog"}
                                className="text-dark text-sm font-normal mx-3 hover:underline"
                            >
                                Blogs
                            </Link>
                            <Link
                                href={"/testimonials"}
                                className="text-dark text-sm font-normal mx-3 hover:underline"
                            >
                                Testimonials
                            </Link>
                            <Link
                                href={"/contact-us"}
                                className="text-dark text-sm font-normal mx-3 hover:underline"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 md:w-10/12 mx-auto gap-2 py-2 flex  items-center justify-between bg-white sticky top-0">
                    <a href="/">
                        <Image
                            priority
                            src="/prime-readymix-logo.png"
                            alt=""
                            className="max-w-[150px] w-full h-full"
                            width={300}
                            height={300}
                        />
                    </a>
                    <a
                        href="tel:+"
                        className="flex items-center justify-center gap-2 py-2 px-3 group  lg:hidden"
                    >
                        <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark">
                            <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
                        </span>
                        <span className="text-sm font-bold text-primary">{contacts.phone}</span>
                    </a>
                    <nav className="flex-grow hidden lg:block">
                        {menu.map((item, key) => (
                            <Link
                                href={item.url}
                                key={key}
                                className="text-lg text-dark hover:text-primary py-2 px-3 duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <nav className="gap-2 items-center hidden lg:flex">
                        <a
                            href="tel:+1 (647) 539-6755"
                            className="flex items-center justify-center gap-2 py-2 px-3 group"
                        >
                            <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark">
                                <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
                            </span>
                            <span className="text-sm font-bold text-primary">{contacts.phone}</span>
                        </a>
                        <Link href="/contact-us" className="btn !text-sm">
                            Get an Estimate
                        </Link>
                    </nav>
                    <IconButton
                        aria-label="icon-button"
                        variant="text"
                        className="block p-4 bg-[#33475B] !text-white rounded-none  lg:hidden"
                        onClick={openDrawer}
                    >
                        <i className="fa-solid fa-bars text-xl bg-none text-white " />
                    </IconButton>
                </div>
            </header>
            <Drawer open={open} onClose={closeDrawer} className="p-4">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        {site_info.name}
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawer}
                        aria-label="icon-button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <nav className="gap-2 flex flex-col">
                    {menu.map((item, key) => (
                        <Link
                            href={item.url}
                            className="flex items-center gap-2 py-2 px-3 group"
                            onClick={closeDrawer}
                            key={key}
                        >
                            <span className="text-xl font-semibold text-primary">{item.name}</span>
                        </Link>
                    ))}
                </nav>
                <nav className="gap-2 flex flex-col">
                    <a
                        href="tel:+1 (647) 539-6755"
                        className="flex items-center gap-2 py-2 px-3 group"
                        onClick={closeDrawer}
                    >
                        <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex  group-hover:bg-dark">
                            <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
                        </span>
                        <span className="text-xl font-semibold text-primary">{contacts.phone}</span>
                    </a>
                    <Link href="/contact-us" className="btn">
                        Contact Us
                    </Link>
                </nav>
            </Drawer>
        </>
    );
};

export default Header;
