import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/Home.module.css";

const Main = () => {
    return (
        <div className='bg-[#f9f3f0]' style={{ height: "100vh" }}>
            <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 px-32 max-xl:px-10 pt-16'>
                <div>
                    <p className='text-[#ff497c] text-lg max-xl:text-lg font-medium'><WhatshotIcon /> Hot Deal In This Week</p>
                    <h1 className='text-[#292930] mt-4 text-6xl max-xl:text-4xl font-bold mb-20'>Roco Wireless Headphone</h1>
                    <Link href="/" className='bg-white text-[#777] p-5'><ShoppingCartOutlinedIcon className='mr-3' />Shop Now</Link>
                </div>
                <div>
                    <div className={styles.bg_main}></div>
                    <Image src="/../product_38.webp" width={450} height={200} className='mx-auto absolute top-60' />
                    <div className={styles.discount}>
                        <p className='text-[#898484]'>From</p>
                        <p className='text-[#3577f0] text-lg font-semibold'>$49.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
