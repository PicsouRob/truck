import React from 'react';

function ToggleMenu({ isOpen, setIsOpen }) {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    const menu = [
        {
            title: "Home",
            id: "#home",
        },
        {
            title: "About Us",
            id: "#about",
        },
        {
            title: "Services",
            id: "#services",
        },
        {
            title: "Contact",
            id: "#contact",
        },
    ];
    
    return (
        <div
            className={ `${ isOpen ? "-translate-x-0 bg-white px-6" : "absolute right-0 translate-x-full" } min-h-screen bg-primary py-8 z-40 w-2/3 transition transform ease-out duration-300 inline-block md:hidden overflow-hidden` }
        >
            <div className="absolute top-3 right-6 cursor-pointer hover:bg-gray-100 p-1 rounded"
                onClick={() => toggleMenu()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="w-full flex-1 space-y-5 mt-12">
                { menu.map((item, ind) => (
                    <a href={item.id} key={ ind } className="flex items-center justify-between w-full"
                        onClick={() => toggleMenu()}
                    >
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="text-secondary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>
                            <p className="text-[15px]">{ item.title }</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#cc5803" class="w-4 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                ))}
            </div>
            <div className="absolute left-6 right-6 bottom-10 px-3">
                <p className="text-center text-[12px]">
                    We don't just manage suppliers, we micro-menage them. We have a consultative, personalized approach.
                </p>
            </div>
        </div>
    );
}

export default ToggleMenu;