import React from 'react'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/Home.module.css";

const Music_experience = () => {
    return (
        <div className='px-32 max-xl:px-10 mt-40 relative'>
            <div className='bg-[#f6f7fb] p-20 rounded-lg'>
                <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4'>
                    <div>
                        <p className='text-[#ff497c] text-lg max-xl:text-lg '><HeadphonesIcon /> Don’t Miss!!</p>
                        <h2 className='text-[#292930] mt-4 text-5xl max-xl:text-4xl font-bold mb-10 leading-normal'>Enhance Your <br /> Music <br /> Experience</h2>
                        <div className='flex mb-11'>
                            <div className='bg-white rounded-full p-4 px-8 text-center mr-5'>
                                <p className='text-xl'>26</p>
                                <p className='text-[#898484] mt-1'>Day</p>
                            </div>

                            <div className='bg-white rounded-full p-4 px-8 text-center mr-5'>
                                <p className='text-xl'>00</p>
                                <p className='text-[#898484] mt-1'>Hrs</p>
                            </div>

                            <div className='bg-white rounded-full p-4 px-8 text-center mr-5'>
                                <p className='text-xl'>33</p>
                                <p className='text-[#898484] mt-1'>Min</p>
                            </div>

                            <div className='bg-white rounded-full p-4 px-8 text-center'>
                                <p className='text-xl'>28</p>
                                <p className='text-[#898484] mt-1'>Sec</p>
                            </div>
                        </div>

                        <Link href="/" className="bg-[#3577f0] text-white text-lg p-4 px-7 rounded-lg">Check it Out!</Link>
                    </div>
                    <div>
                        <div className={styles.music_singnal}>
                            <div className="item_circle circle_1"></div>
                            <div className="item_circle circle_2"></div>
                            <div className="item_circle circle_3"></div>
                            <div className="item_circle circle_4"></div>
                            <div className="item_circle circle_5"></div>
                        </div>

                        <Image src="/../poster.webp" width={450} height={200} className='mx-auto absolute -top-24' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Music_experience
