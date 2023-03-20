import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
    const [ message, setMessage ] = useState({
        name: "",
        mail: '',
        phone: '',
        subject: '',
        clientMessage: '',
        isCheck: false,
    });
    
    const info = [
        {
            icon: '/icons/location.svg',
            text: 'Calle Lincoln, Las americas. Santo Domingo.'
        },
        {
            icon: '/icons/phone.svg',
            text: '+1 809 619 00 51'
        },
        {
            icon: '/icons/mail.svg',
            text: 'schneiderinfo@gmail.com'
        },
    ];
    
    const sendMessage = () => {
        const getKeys = Object.keys(message);
        getKeys.map((item) => {
            if (message[item] !== '') {
                console.log(message);
            } else {
                alert("It is necessary to fill in all empty fields");
            }
            
            return null;
        });
    }
    
    return (
        <motion.div id='contact' className=''
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-8 place-items-center">
                    <div className="flex flex-col gap-6">
                        <p className="uppercase text-[14px]">contact us</p>
                        <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl">
                            Have Questions? <br /> Get in touch!
                        </h1>
                        <p className="">
                            Leave your worries behind and use delivery service to transfer and deliver your shipment in time!. Discover how easy it is to ship goods with us!
                        </p>
                        <div className="flex flex-col gap-4">
                            { info.map((inf, ind) => (
                                <div key={ind} className="flex items-center gap-3">
                                    <img src={inf.icon} alt={inf.text} className="h-5 w-5" />
                                    <p className="text-[14px]">{ inf.text }</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-[14px] space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <p className="">Name</p>
                                <input className='border p-2 w-full' type="text" name="name" id="" 
                                    onChange={(e) => setMessage({...message, name: e.target.value})}
                                />
                            </div>
                            <div className="space-y-4">
                                <p className="">Email Address</p>
                                <input className='border p-2 w-full' type="email" name="mail" id=""
                                    onChange={(e) => setMessage({...message, mail: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <p className="">Phone</p>
                                <input className='border p-2 w-full' type="tel" name="phone" id="" 
                                    onChange={(e) => setMessage({...message, phone: e.target.value})}
                                />
                            </div>
                            <div className="space-y-4">
                                <p className="">Subject</p>
                                <input className='border p-2 w-full' type="text" name="subject" id="" 
                                    onChange={(e) => setMessage({...message, subject: e.target.value})}
                                />
                            </div>
                        </div>
                        <p className="">
                            How can we help you? Feel free to get in touch!
                        </p>
                        <textarea name="clientMessage" id="" rows='4' className='border w-full p-2'
                            onChange={(e) => setMessage({...message, clientMessage: e.target.value})}
                        />
                        <div className="flex items-center gap-8">
                            <button onClick={() => sendMessage()} className='px-3 w-[11rem] lg:w-[9rem] py-3 shadow hover:opacity-90 bg-secondary text-white uppercase'>get in touch</button>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="isCheck" id="" 
                                    onChange={ (e) => setMessage({
                                        ...message, isCheck: e.target.checked,
                                    })}
                                />
                                <p className="text-[12px]">I agree that my data is <span className='underline'>collected and stored.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;