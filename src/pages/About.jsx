import React from 'react';
import { motion } from "framer-motion";

function About() {
    return (
        <motion.div id='about' className='max-w-7xl mx-auto px-6 md:px-8'
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <div className="py-16 space-y-6">
                <div className="space-y-3 md:w-1/2">
                    <p className="uppercase text-[14px] text-secondary">about us</p>
                    <h1 className="font-extrabold text-4xl xl:text-5xl">Your logistics <span className="text-secondary font-extrabold">solutions</span> provider</h1>
                    <p className="text-base pt-3">Our corporate values form the basis of everything we go</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 font-light">
                    <div className="">
                        <p className="">
                            We specialize in providing freight shipping solutionss whenever and wherever you need tthem. As an independant freight agency, we have access to one of the lagest logistics networks in the industry, which means your business has access to this vast network too. <br /> <br />
                            We are commited to providing our customers with quality service. We will work closely with you to develop the best logistics plan for your supply chain.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <p className="">
                            In addition to our commitment to qualify service, we are dedicated to safety. You can trust that we will keep your supply chain moving and get your freight delivered safely and on time.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="border-2 border-green-500 p-1 rounded-full transition-all duration-300 ease-out">
                                <img src="/images/avatar/5.jpg" alt="founder" className="h-20 rounded-full" />
                            </div>
                            <div className="">
                                <h1 className="font-extrabold">Schneider Morant</h1>
                                <p className="text-secondary">Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;