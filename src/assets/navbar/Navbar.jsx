import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import { FaShoppingCart } from "react-icons/fa";
import UseCart from '../../hooks/UseCart';
import UseAdmin from '../../hooks/UseAdmin';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart] = UseCart()
    const [isAdmin] = UseAdmin()

    const navoption = <>

        <li><Link to="/">Home</Link></li>
        <li><Link to="menu">Our menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }


        <li><Link to="secret">secret</Link></li>
        <li>
            <Link to="/dashboard/cart">

                <button className="flex gap-0 justify-center items-center">
                    <FaShoppingCart></FaShoppingCart>
                    <div className=" ">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {user ? <><button onClick={logOut} className=''>Logout</button> </> : <>  <li><Link to="login">Login</Link></li></>}





    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navoption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Bos</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navoption}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn"></a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;