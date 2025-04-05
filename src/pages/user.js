import React from 'react'
import styles from "@/styles/sedap.module.css";
import Menu from '@/components/Menu';
import Link from 'next/link';
import Image from 'next/image';


function user() {
  return (
    <>
        <div className='page'>
        <h1 className='sedap'>Sedap.</h1>
        <p className='modern'>Modern Admin Dashboard</p>
    <Menu Image width={10} height={10} alt="gfg" src="./home.png" name="Dashboard"/>
    <Link className='link' href="http://localhost:3001/sedap"> <Menu Image width={10} height={10} alt="gfg"  src="./chiziqlar.png" name="Order List"/></Link>
    <Menu Image width={10} height={10} alt="gfg" src="./papka.png" name="Order Detail"/>
    <Menu Image width={10} height={10} alt="gfg" src="./user.png" name="Customer"/>
    <Menu Image width={10} height={10} alt="gfg" src="./analiz.png" name="Analytics"/>
    <Menu Image width={10} height={10} alt="gfg" src="./qalam.png" name="Reviews"/>
    <Menu Image width={10} height={10} alt="gfg" src="./coffe.png" name="Foods"/>
    <Menu Image width={10} height={10} alt="gfg" src="./note.png" name="Food Detail"/>
    <Menu Image width={10} height={10} alt="gfg" src="./user.png" name="Customer Detail"/>
    <Menu Image width={10} height={10} alt="gfg" src="./calendar.png" name="Calendar"/>
    <Menu Image width={10} height={10} alt="gfg" src="./chat.png" name="Chat"/>
    <Menu Image width={10} height={10} alt="gfg" src="./wallet.png" name="Wallet"/>
    
    <Image src="./banner.png" width={10} height={10} alt="gfg" className='banner' />
    <h4 className='res'>Sedap Restaurant Admin Dashboard</h4>
    <p className='ikki'>© 2020 All Rights Reserved</p>
    <p className='made'>Made with ❤️ by Peterdraw</p>
    </div>
    <div className='buts'>
    <input className='search' type="text" placeholder='Search here' />
    <Image width={10} height={10} alt="gfg" className='logo' src="./qongiroq.png" />
    <Image width={10} height={10} alt="gfg" className='logo' src="./com.png"/>
    <Image width={10} height={10} alt="gfg" className='logo' src="./box.png"/>
    <Image width={10} height={10} alt="gfg" className='logo' src="./setting.png"/>
    <h4 className='hello'>Hello, Samantha</h4>
    
</div>
<div>
 <h1 className='mar'>27.03.2025 Ismoilov.Javohir</h1>
 
</div>
    </>
  )
}

export default user