"use client";
import { AiFillFacebook, AiFillGoogleCircle, AiOutlineInstagram } from "react-icons/ai";
import { site_info } from "../../site/info";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="pt-10 bg-[#1F2A35] text-white ">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 justify-between items-start mx-auto">
                    <div className="col-span-12 md:col-span-2 mx-auto justify-center md:justify-start">
                        <Image
                            priority
                            src="/prime-readymix-logo.png"
                            className="w-full max-w-[150px] bg-white mb-3 rounded-none mx-auto md:mx-0 h-full"
                            alt=""
                            width={300}
                            height={300}
                        />
                        <p className="text-sm md:w-4/5 leading-relexed text-center md:text-left">
                            {site_info.name} simplifies the process and costs of renovation by
                            bringing design, sourcing and management under one roof.
                        </p>
                    </div>
                    <div className="text-lg font-medium col-span-12 md:col-span-1">
                        <h4 className="font-bold text-base tracking-wider mb-2 text-center md:text-start">
                            Company
                        </h4>
                        <ul className="tracking-wide text-center md:text-start text-base text-white">
                            <li>
                                <Link
                                    href="/blogs"
                                    className="mb-1 text-white hover:text-primary text-lg py-2"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact-us"
                                    className="mb-1 text-white hover:text-primary text-lg py-2"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/testimonials"
                                    className="mb-1 text-white hover:text-primary text-lg py-2"
                                >
                                    Testimonial
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-lg font-medium col-span-12 md:col-span-1">
                        <h4 className="font-bold text-base tracking-wider mb-2 text-center md:text-start">
                            Services
                        </h4>
                        <ul className="tracking-wide text-center md:text-start text-base">
                            <li>
                                <Link
                                    href="/concrete-delivery"
                                    className="mb-1 text-white hover:text-primary"
                                >
                                    Concrete Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-lg font-medium col-span-12 md:col-span-1">
                        <h4 className="font-bold text-base tracking-wider mb-2 text-center md:text-start">
                            Contacts
                        </h4>
                        <div className="flex gap-3 md:gap-6 justify-center md:justify-start items-center">
                            <a
                                href="https://readymixnearme.ca/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillFacebook className="h-5 md:h-8 w-5 md:w-8" />
                            </a>
                            <a
                                href="https://readymixnearme.ca/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGoogleCircle className="h-5 md:h-8 w-5 md:w-8" />
                            </a>
                            <a
                                href="https://readymixnearme.ca/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineInstagram className="h-5 md:h-8 w-5 md:w-8" />
                            </a>
                        </div>
                        <div>
                            <p>Address:</p>
                            <p>Phone:</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <hr className="border-white/50 " />
                <br />
                <div className="flex flex-col md:flex-row justify-between items-center w-full my-5">
                    <h6 className="text-center text-sm font-extralight text-white/50 ">
                        <i className="fa-regular fa-copyright mr-2"></i>
                        Copyright 2021 | All rights Reserved
                    </h6>

                    <h6 className="text-center text-base font-normal text-white ">
                        Privacy Policy
                    </h6>
                </div>
                <br />
            </div>
        </footer>
    );
};

export default Footer;
