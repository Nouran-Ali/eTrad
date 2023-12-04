import React from 'react'
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import { ArrowRightOutlined, MailOutlined, MailFilled } from '@ant-design/icons';
import { Input } from 'antd';

const Poster = () => {
    return (
        <>
            <div className='px-32 max-xl:px-10'>
                <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-9 text-white'>
                    <div className={`${styles.poster1} rounded-lg`}>
                        <h3 className='font-bold text-4xl ml-52 mt-11'>Rich sound,<br /> for less..</h3>
                        <Link href="/" className='ml-52 mt-3 text-[#5d6873] font-semibold flex items-center'>Collections <ArrowRightOutlined className='ml-3' /></Link>
                    </div>
                    <div className={`${styles.poster2} rounded-lg`}>
                        <p className='mt-11 ml-16'>50% Offer In Winter</p>
                        <h3 className='font-bold text-4xl ml-16 mt-2'>Get VR<br /> Reality Glass</h3>
                    </div>

                </div>
                <div className={`${styles.poster3} mt-8 rounded-lg`}>
                    <div className='pt-16 ml-24'>
                        <p className='text-[#3577f0] text-lg max-xl:text-lg flex items-center'><MailOutlined className='mr-3' /> Newsletter</p>
                        <h3 className='text-[#292930] text-4xl font-bold mt-3'>Get weekly update</h3>
                        <div className='mt-8'>
                            <Input size="large" placeholder=" example@gmail.com" prefix={<MailFilled />} className='w-2/5 p-3' />
                            <button className='bg-[#292930] text-white p-3 px-7 ml-4 rounded'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster
