import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import Product from './Product';
import Link from 'next/link';

const Our_products = () => {
    return (
        <div className='px-32 max-xl:px-10 mt-16'>
            <p className='text-[#ff497c] text-lg max-xl:text-lg '><StorefrontIcon /> Our Products</p>
            <h2 className='text-[#292930] mt-3 text-3xl max-xl:text-4xl font-bold mb-8 leading-normal'>Explore our Products</h2>
            <div className='grid grid-cols-4 max-xl:grid-cols-1 gap-10 relative mb-10'>
                <Product
                    offer="20%"
                    src="/../poster.webp"
                    title="3D™ wireless headset"
                    price="$400"
                    offPrice="$500"
                    buy_link="/"
                    favorite_link="/"
                    remove_link="/"
                />
                <Product
                    offer="40%"
                    src="/../poster.webp"
                    title="3D™ wireless headset"
                    price="$400"
                    offPrice="$500"
                    buy_link="/"
                    favorite_link="/"
                    remove_link="/"
                />
                <Product
                    offer="41%"
                    src="/../poster.webp"
                    title="3D™ wireless headset"
                    price="$400"
                    offPrice="$500"
                    buy_link="/"
                    favorite_link="/"
                    remove_link="/"
                />
                <Product
                    offer="9%"
                    src="/../poster.webp"
                    title="3D™ wireless headset"
                    price="$400"
                    offPrice="$500"
                    buy_link="/"
                    favorite_link="/"
                    remove_link="/"
                />
            </div>
            <Link href="/" className="bg-[#f6f7fb] text-[#898484] rounded-lg font-semibold mx-auto mb-8 flex justify-center p-4 px-16 w-1/3">View All Products</Link>
        </div>
    )
}

export default Our_products
