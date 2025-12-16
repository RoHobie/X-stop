import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext);

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <Link to="/">
                <img src={assets.logo} alt="logo" className="w-36" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                {['/', '/collection', '/about', '/contact'].map((path, i) => (
                    <NavLink key={i} to={path} className="flex flex-col items-center gap-1">
                        <p>{['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i]}</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                ))}
            </ul>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
                <img
                    onClick={() => setShowSearch(true)}
                    src={assets.search_icon}
                    alt=""
                    className="w-5 cursor-pointer"
                />

                <Link to="/login">
                    <img
                        src={assets.profile_icon}
                        alt=""
                        className="w-5 cursor-pointer"
                    />
                </Link>

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                        {getCartCount()}
                    </p>
                </Link>

                <img
                    src={assets.menu_icon}
                    alt=""
                    className="w-5 cursor-pointer sm:hidden"
                    onClick={() => setVisible(!visible)}
                />
            </div>

            {/* Sidebar menu for small screens */}
            <div
                className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white ease-in duration-300
        ${visible ? 'w-full' : 'w-0'}`}
            >
                <div className="flex flex-col text-gray-600">
                    <div
                        onClick={() => setVisible(false)}
                        className="flex items-center gap-4 p-3 cursor-pointer"
                    >
                        <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
                        <p className="font-semibold">Back</p>
                    </div>

                    {['/', '/collection', '/about', '/contact'].map((path, i) => (
                        <NavLink
                            key={i}
                            to={path}
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                        >
                            {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i]}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
