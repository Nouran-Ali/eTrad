import React from 'react'
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Feedback = () => {
    return (
        <div className='bg-[#f2f5f6] pt-8'>
            <div className={`${styles.bg_feedback}`}>
                <div className='px-32 max-xl:px-10 mt-10 mb-10'>
                    <div>
                        <p className='text-[#ff497c] text-lg max-xl:text-lg font-medium'><FormatQuoteIcon /> Testimonials</p>
                        <h2 className='text-[#292930] mt-3 text-3xl max-xl:text-4xl font-bold mb-8'>Users Feedback</h2>
                    </div>

                    <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-10 relative mb-10'>
                        <div className='relative'>
                            <div className={`bg-white p-8 rounded-lg ${styles.box_feedback}`}>
                                <p className='text-[#777]'>“ It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors. “</p>
                            </div>
                            <div className='flex items-center mt-10'>
                                <Image src="/../James.webp" width={70} height={200} className='mr-5' />
                                <div>
                                    <p className='text-[#777]'>Head Of Idea</p>
                                    <h3>James C. Anderson</h3>
                                </div>
                            </div>
                        </div>

                        <div className='mt-7 relative'>
                            <div className={`bg-white p-8 rounded-lg ${styles.box_feedback} ${styles.box_feedback_center}`}>
                                <p className='text-[#777]'>“ It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors. “</p>
                            </div>
                            <div className='flex items-center mt-10'>
                                <Image src="/../James2.png" width={70} height={200} className='mr-5' />
                                <div>
                                    <p className='text-[#777]'>Head Of Idea</p>
                                    <h3>James C. Anderson</h3>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className={`bg-white p-8 rounded-lg ${styles.box_feedback}`}>
                                <p className='text-[#777]'>“ It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors. “</p>
                            </div>
                            <div className='flex items-center mt-10'>
                                <Image src="/../James3.webp" width={70} height={200} className='mr-5' />
                                <div>
                                    <p className='text-[#777]'>Head Of Idea</p>
                                    <h3>James C. Anderson</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
