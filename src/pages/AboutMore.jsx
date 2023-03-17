import React from 'react';

function AboutMore() {
    const data = [
        "Unlimited Revisions",  
        "Good Features",  
        "Best Solutions",  
        "24/7 Support",  
    ];
    
    return (
        <div className='bg-gray-50'>
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
                <div className="grid gap-8 md:grid-cols-2 place-items-center">
                    <div className="">
                        <img src="/images/about-01.png" alt="about" className="" />
                    </div>
                    <div className="flex flex-col gap-8">
                        <h3 className="uppercase text-secondary">More About Us</h3>
                        <h1 className="font-extrabold text-4xl xl:text-5xl">We offer professional dispatch services for your trucks.</h1>
                        <p className="">
                            We coordinate and manage truck driver schedules to ensure products and goods are picked up and delivered in a timely manner. We receive calls for trucking services and contact their fleet of truckers to arrange pickups and deliveries. We maintain contact with truckers throughout their journeys to monitor their progress and resolve any issues that may arise along the way.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            { data.map((item, ind) => (
                                <div key={ ind } className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#f79256" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                    <p className="font-bold">{ item }</p>
                                </div>
                            ))}
                        </div>
                        <a href='#contact' className="text-center text-white py-3 bg-secondary shadow-md hover:opacity-90 max-w-[150px]">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMore;