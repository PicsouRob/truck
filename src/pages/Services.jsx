import React from 'react';
import { motion } from 'framer-motion';

import { services } from '../helpers/services';

function Services() {
    return (
        <motion.div id='services' className=''
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <div className="max-w-7xl px-6 md:px-8 mx-auto py-16">
                <div className="w-full">
                    <div className="space-y-3 md:w-1/2 w-full">
                        <p className="uppercase text-[14px] text-secondary">Our Services</p>
                        <h1 className="font-extrabold text-4xl xl:text-5xl">Our <span className="text-secondary font-extrabold">sevices</span> make your work more productive.</h1>
                        <p className="text-base pt-3">We appreciate your trust greatly! Our clients choose us and our services because they know we’re the best.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center">
                        { services.map((data, ind) => (
                            <div key={ ind } className="grid place-items-center gap-4 border-2 border-dashed px-2 py-3 rounded-md">
                                <div className="bg-secondary/10 p-3 rounded-md">
                                    <img src={ data.icon } alt={ data.title } className="w-16 h-16" />
                                </div>
                                <h1 className="font-bold text-[17px]">{ data.title }</h1>
                                <p className="text-gray-600 text-[14px]">{ data.text }</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Services;