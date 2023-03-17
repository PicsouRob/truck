import React from 'react';

function Footer() {
    return (
        <div className="bg-principal py-8 text-gray-300 text-[14px]">
            <div className="max-w-7xl mx-auto px-6 md:px-8 divide-y divide-gray-700 space-y-6">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="space-y-2">
                        <a href="#home" className="">
                            <h1 className="font-bold text-xl text-white">Truck Dispatcher</h1>
                        </a>
                        <div className="p">
                            We don't just manage suppliers, we micro-menage them. We have a consultative, personalized approach.
                        </div>
                    </div>
                    <Info title="Location" text1="Las americas, Santo Domingo" text2="Calle Lincoln, Dominican Republic" />
                    <Info title="Contacts" text1="schneiderinfo@gmail.com" text2="+1 809 619 00 51" />
                    <div className="">
                        
                    </div>
                </div>
                <div className="flex-1 flex flex-wrap items-center justify-center sm:justify-between gap-6 pt-6">
                    <h1 className="text-[14px]">Truck Dispatcher © 2023. All Rights Reserved</h1>
                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/" target="_blank" className="" rel="noreferrer">
                            <img src="/icons/instagram.svg" alt="instagram" className="w-8 h-6" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" className="" rel="noreferrer">
                            <img src="/icons/facebook.svg" alt="facebook" className="w-8 h-6" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="" rel="noreferrer">
                            <img src="/icons/twitter.svg" alt="twitter" className="w-8 h-6"  />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Info = ({ text1, text2, title }) => (
    <div className="space-y-4">
        <h1 className="font-bold text-[16px]">{ title }</h1>
        <div className="space-y-2">
            <p className="">{ text1 }</p>
            <p className="">{ text2 }</p>
        </div>
    </div>  
);

export default Footer;