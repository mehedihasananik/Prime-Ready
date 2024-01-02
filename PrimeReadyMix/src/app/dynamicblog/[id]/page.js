'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Contact from '../../../components/common/Contact';
import Head from 'next/head';
import Image from 'next/image';

const DynamicBlog = ({ params }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://readymix-server.vercel.app/api/posts/${params?.id}`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log(categories);

    return (
        // <div className='mt-8'>
        //     <div className='flex'>
        //         <div className='mr-8'>
        //             <h1 className='text-3xl font-bold mb-4'>{categories.name}</h1>
        //             <p className='text-gray-600'>{categories.description}</p>
        //         </div>
        //         <div>
        //             <img className='max-w-full h-auto' src={categories.image} alt="Blog Image" />
        //         </div>
        //     </div>
        //     <div className='flex'>
        //         <div>
        //             <div className='mt-8' dangerouslySetInnerHTML={{ __html: categories.quillValue }} />
        //         </div>
        //         <div>
        //             <Contact />
        //         </div>
        //     </div>
        // </div>

        <div className='mt-8 w-full max-w-screen-lg mx-auto'>
            <div className='flex'>
                <div className='mr-8'>
                    <h1 className='text-3xl font-bold mb-4'>{categories?.name}</h1>
                    <p className='text-gray-600'>{categories?.description}</p>
                </div>
                <div>
                    <Image width={900} height={400} className='h-auto' src={categories?.image} alt="Blog Image" />
                </div>
            </div>
            <div className='flex mt-8 gap-8'>
                <div className='w-full' dangerouslySetInnerHTML={{ __html: categories?.quillValue }} />
                <div className='w-full'>
                    {/* Assuming Contact is a component that needs to be full-width */}









                    <div className='lg:w-[80%] mt-12 sticky top-0'>
                        <h5>Contact Prime Ready Mix </h5>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    placeholder='    First Name *'
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    placeholder='    Last Name *'
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="last-name"
                                    id="last-name"
                                    placeholder='     Email*'
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="last-name"
                                    id="last-name"
                                    placeholder='     Phone'
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <select
                                    name="phone"
                                    id="phone"
                                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option value="">Your Budget</option>
                                    <option value="tentotwenty">$10,000 - $20,000</option>
                                    <option value="twentytothirty">$20,000 - $30,000</option>
                                    <option value="thirtytofifty">$30,000 - $50,000</option>
                                    <option value="fifty">$50,000</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <textarea
                                    name="phone"
                                    id="phone"
                                    placeholder="    Project Description"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-mr-4"
                                />
                            </div>
                        </div>
                        <button className="bg-orange-800 hover:bg-red-600 w-full mt-4 text-white font-bold py-4 px-4 rounded-tl-md rounded-tr-md">
                            Submit
                        </button>
                    </div>





                </div>
            </div>
        </div>

    );

};

export default DynamicBlog;
