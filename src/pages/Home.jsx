import React, { useState } from 'react';
import { motion } from "framer-motion";

import Header from '../components/Header';
import ToggleMenu from '../components/ToggleMenu';

function Home() {
    const [ isOpen, setIsOpen ] = useState(false);
    const data = [
        "We find loads",
        "Best Rate Negotiation",
        "Route Planning",
        "Credit check",
        "Paperwork Handling",
        "Invoice Factoring submission",
    ];
    
    return (
        <div className="relative">
            <Header isOpen={ isOpen } setIsOpen={ setIsOpen } />
            <motion.div className="fixed top-0 left-1/3 w-full right-0 overflow-hidden z-50">
                <ToggleMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </motion.div>
            <div id='home' className='py-16 md:min-h-[750px] flex'
                style={ {
                    background: 'linear-gradient(to right, #000, rgba(0, 0, 0, 0.7)), url(/images/track-26.jpg)'
                }}
            >
                <div className="flex-1 flex max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex-1 grid gap-16 md:gap-12 md:grid-cols-2 md:place-items-center text-white">
                        <motion.div className="flex flex-col gap-5"
                            initial={ { scale: 0 } }
                            animate={ { scale: 1 } }
                            transition={{ duration: 0.75, ease: "easeOut" }}
                            exit={{ opacity: 1 }}
                        >
                            <p className="uppercase text-[14px]">Welcome to truck Dispatcher</p>
                            <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl uppercase">
                                a truly global service provider
                            </h1>
                            <p className="text-gray-400 text-[15px]"
                                
                            >
                                Leave your worries behind and use delivery service to transfer and deliver your shipment in time!. Discover how easy it is to ship goods with us!
                            </p>
                            <div className="block mt-8">
                                <a href="#contact" className="px-6 py-3 md:py-4 bg-secondary shadow-md hover:bg-white hover:text-black">Get Started</a>
                            </div>
                        </motion.div>
                        <div className="text-black">
                            <motion.div className="shadow-lg py-12 px-5 bg-white space-y-5"
                                initial={ { scale: 0 } }
                                animate={ { scale: 1 } }
                                transition={{ duration: 0.75, ease: "easeOut" }}
                                exit={{ opacity: 1 }}
                            >
                                <div className="text-center">
                                    <h1 className="pb-3 font-bold text-2xl">
                                        Truck Dispatch <br /> Services
                                    </h1>
                                    We make your cago transport simple
                                </div>
                                <div className="space-y-3">
                                    { data.map((item, ind) => (
                                        <div key={ ind } className="flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#f79256" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                            </svg>
                                            <p className="text-[14px]">{ item }</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;