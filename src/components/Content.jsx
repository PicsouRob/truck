import React from 'react';

function Content() {
    return (
        <div className='bg-gray'> 
            <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
                <div className="shadow-md px-12 py-16 flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-12 bg-gray-50">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <div className="rounded-full p-3 bg-secondary/30">
                            <img src="/icons/emoji.svg" alt="emoji" className="w-8 h-8" />
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="font-bold text-2xl">Open for Appointements</h2>
                            <p className="">Interested in working with Our Company?</p>
                        </div>
                    </div>
                    <div className="">
                        <a href="#contact" className="uppercase text-[14px] bg-principal text-white py-3 px-5 rounded-md hover:bg-secondary">Get in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;