import React, { useState } from 'react';
import { testimonial } from '../helpers/testimonial';

function Testimonial() {
    const [ showText, setShowText ] = useState(2);
    
    return (
        <div class="text-white bg-cover aspect-[9/3]"
            style={ {
                background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(/images/track-26.jpg)'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-12">
                <div className="text-center space-y-3">
                    <h1 className="font-semibold text-3xl">Testimonials</h1>
                    <p className="text-base text-secondary">What People and Clients Think About Us.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-full lg:w-3/4 mx-auto">
                    <img src="/icons/quote.svg" alt="quote" className="h-12" />
                    <div className="space-y-6 mt-4">
                        <div className="text-lg text-center space-y-6 ">
                            <p className="text-xl transition-all duration-300 ease-out">"{ testimonial[showText].text }"</p>
                            <div className="transition-all duration-300 ease-in">
                                <h1 className="font-semibold text-secondary">{ testimonial[showText].name }</h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-x-3 md:gap-x-5">
                            { testimonial.map((data, ind) => (
                                <div className={`${showText === ind ? "border-green-500" : "border-transparent"} border-2 p-1 rounded-full cursor-pointer transition-all duration-300 ease-out`}
                                onClick={() => setShowText(ind)}
                                >
                                    <img src={data.avatar} alt={data.name} className="rounded-full h-12 md:h-20" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;