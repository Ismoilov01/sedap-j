import React from 'react'
import styles from "@/styles/sedap.module.css";
import Image from 'next/image';


function Users() {
    return (
        <>
            <div className='users'>
                <p className='c'>#C-004560</p>
                <p>27 March 2020, 12:42 AM</p>
                <p className='veronica'>Veronica</p>
                <p className='london'>Corner Street 5th, London</p>
                <p className='veronica'>$78.92</p>
                <button className='but veronica2'><p>$35.35</p></button>
                <button className='set'><Image  width={10} height={10} alt="gfg" src="/Images/vertical.png"/></button>
            </div>
        </>

    )
}

export default Users