import React from 'react'
import SellIcon from '@mui/icons-material/Sell';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Categories = () => {
    return (
        <div className='px-32 max-xl:px-10 mt-10 mb-10'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-[#ff497c] text-lg max-xl:text-lg font-medium'><SellIcon /> Categories</p>
                    <h2 className='text-[#292930] mt-3 text-3xl max-xl:text-4xl font-bold mb-8'>Browse by Category</h2>
                </div>
                <div className='flex items-center text-[#898484] text-sm'>
                    <div className='bg-[#f6f7fb] p-3 rounded-lg'>
                        <ArrowBackIcon />
                    </div>
                    <div className='bg-[#f6f7fb] p-3 rounded-lg ms-3'>
                        <ArrowForwardIcon />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-6 max-xl:grid-cols-1 gap-4 text-center text-[#292930] font-medium'>
                <div className={styles.categories}>
                    <Image src="/../elec1.webp" width={70} height={200} className='mx-auto' />
                    <p className='mt-3'>Computers</p>
                </div>


                <div className={styles.categories}>
                    <Image src="/../elec2.png" width={70} height={200} className='mx-auto' />
                    <p className='mt-3'>Accessories</p>
                </div>

                <div className={styles.categories}>
                    <Image src="/../elec3.webp" width={70} height={200} className='mx-auto' />
                    <p className='mt-3'>Laptops</p>
                </div>

                <div className={styles.categories}>
                    <Image src="/../elec4.webp" width={70} height={200} className='mx-auto' />
                    <p className='mt-3'>Phones</p>
                </div>

                <div className={styles.categories}>
                    <Image src="/../elec5.png" width={70} height={200} className='mx-auto' />
                    <p className='mt-3'>Monitors</p>
                </div>

                <div className={styles.categories}>
                    <Image src="/../elec6.png" width={70} height={200} className='mx-auto' />
                    <p className='mt-3'>Networking</p>
                </div>
            </div>
        </div>
    )
}

export default Categories
