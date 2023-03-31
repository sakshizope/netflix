import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const {logout} = useAuth();

    useEffect(() =>{
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return() =>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className='flex items-center space-x-2 md:space-x-10'>
            <img 
                src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" 
                alt="logo"
                width={100}
                height={100}
                className='cursor-pointer object-contain'
            />

            <ul className='hidden-space-x-4 md:flex'>
                <li className='headerLink'>Home</li>
                <li className='headerLink'>TV Shows</li>
                <li className='headerLink'>Movies</li>
                <li className='headerLink'>New & Popular</li>
                <li className='headerLink'>MyList</li>
            </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
            <FiSearch className='h-6 w-6' />
            <p className='hidden lg:inline'>Kids</p>
            <FaBell className='h-6 w-6' />
            {/* <Link href="/account"> */}
                <FaUserCircle onClick={logout} className="cursor-pointer h-6 w-6" />
            {/* </Link> */}
        </div>
    </header>
  )
}

export default Header