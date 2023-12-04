import Image from 'next/image'
import React from 'react'
import styles from "../styles/Home.module.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Link from 'next/link';

const Product = ({offer ,src , title , price , offPrice , buy_link , favorite_link, remove_link}) => {
    return (
        <div className={styles.product}>
            <div className='bg-[#f7f7f7] p-8 rounded-lg mt-3'>
                <Image src={src} width={450} height={200} className='mx-auto' />
                <p className={`bg-[#3577f0] text-white rounded-lg p-1 px-3 text-xs font-semibold ${styles.OFF}`}>{offer} OFF</p>
                <div className={styles.actions_products}>
                    <div className={`flex items-center justify-between`}>
                        <Link href={favorite_link} className='bg-white text-black rounded-lg p-2 mr-3'><FavoriteBorderIcon sx={{ fontSize: "18px" }} /></Link>
                        <div className='bg-[#ff497c] text-white rounded-lg p-2 text-sm'>
                            <Link href={buy_link}>Buy Product</Link>
                        </div>
                        <Link href={remove_link} className='bg-white text-black rounded-lg p-2 ms-3'><RemoveRedEyeIcon sx={{ fontSize: "18px" }} /></Link>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-[#898484] mt-5'>{title}</p>
                <p className='text-[#292930] font-semibold mt-2'><span className='text-[#d6d6d6] line-through'>{offPrice} </span> {price}</p>
            </div>
        </div>
    )
}

export default Product
