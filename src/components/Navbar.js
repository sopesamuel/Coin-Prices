import React from 'react';
// import coin from '../Assets/3338958-business-tools-coins_106885.png';
import './Navbar.css'
import { SiBitcoin } from 'react-icons/si'


export default function Navbar() {

    return (
    <div>
        <div className='navbar'>
            {/* <img src={coin} alt='' className='icon' /> */}
            <SiBitcoin className='icon' />
            <h1>Coin <span className='purple'>Search</span></h1>
        </div>
    </div>
  )
}
