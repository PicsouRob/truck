import React from 'react';
import { motion } from 'framer-motion';

import { choose } from '../helpers/choose';

function Choose() {
    return (
        <motion.div id='about' className='bg-gray-50'
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="py-16">
                    <div className="space-y-3 text-center">
                        <h1 className="font-bold text-3xl">Why Choose Us</h1>
                        <p className="text-base">Our corporate values form the basis of everything we go</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        { choose.map((data, ind) => (
                            <div className="flex gap-4">
                                <img src={data.icon} alt={data.title} className="h-12" />
                                <div className="space-y-3">
                                    <h1 className="font-bold text-xl">{ data.title }</h1>
                                    <p className="text-[14px] leading-6 font-normal">{ data.text }</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Choose;