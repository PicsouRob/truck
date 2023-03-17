import React from 'react';

function Header({ isOpen, setIsOpen }) {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className="relative overflow-hidden bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">
                <div className="flex items-center justify-between">
                    <a href="#home" className="">
                        <img src="/images/logo.png" alt="logo" className='h-5 md:h-8' />
                    </a>
                    <div className="hidden md:flex space-x-6 text-[14px] text-black">
                        <a href="#home" className="hover:text-secondary">Home</a>
                        <a href="#about" className="hover:text-secondary">About Us</a>
                        <a href="#services" className="hover:text-secondary">Services</a>
                        <a href="#contact" className="hover:text-secondary">Contacts</a>
                        {/* <a href="" className=""></a> */}
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>
                        <h1 className="text-secondary font-semibold">+1 809 619 00 51</h1>
                        <div className="md:hidden">
                            { isOpen ? (
                                <div className="cursor-pointer"
                                    onClick={() => toggleMenu()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            ): (
                                <div className="cursor-pointer"
                                    onClick={() => toggleMenu()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>    
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;