import React from 'react'
import Image from 'next/image'


function Menu(props) {
    return (
        <>
        <div className='home'>
        <Image width={10} height={10} alt="gfg" className='home2' src={[props.Image]} />
        <p>{props.name}</p>
        </div>
        </>

    )  
}
export default Menu