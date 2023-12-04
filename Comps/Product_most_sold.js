import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from "../styles/Home.module.css";

const Product_most_sold = ({ src, title, offPrice, price, favorite_link, buy_link }) => {
    return (
        <div className={`flex items-center p-7 rounded-lg ${styles.product_most_sold}`}>
            <div className='bg-[#f5f7fb] rounded-lg p-5'>
                <Image src={src} width={80} height={200} className='mx-auto' />
            </div>
            <div className='ml-7'>
                <p className='text-[#898484] mt-5'>{title}</p>
                <p className='text-[#292930] font-semibold mt-2'><span className='text-[#d6d6d6] line-through'>{offPrice} </span> {price}</p>
            </div>
            <div className='flex justify-end ml-auto'>
                <div>
                    <Link href={favorite_link} className={`text-[#292930] rounded-lg px-14 py-2 mt-3 ${styles.favorite}`}><FavoriteBorderIcon sx={{ fontSize: "18px" }} /></Link>
                    <div className={`rounded-lg p-2 px-6 text-sm mt-3 ${styles.buy_link}`}>
                        <Link href={buy_link}>Buy Product</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_most_sold
