import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-md navbar-light bg-light'>
            <Link href='/'><a className='navbar-brand'>Company</a></Link>
            <button className='navbar-toggler' type='button' data-target='#navbarItems'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarItems'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link href='/about'><a className='nav-link'>About</a></Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/contact'><a className='nav-link'>Contact</a></Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/go'><a className='nav-link'>Go</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar