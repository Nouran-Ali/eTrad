import React from 'react'
import StarsIcon from '@mui/icons-material/Stars';
import Product_most_sold from './Product_most_sold';

const Most_sold = () => {
    return (
        <div>
            <div className='px-32 max-xl:px-10 mt-10 mb-10'>
                <div className='text-center'>
                    <p className='text-[#8c71db] text-lg max-xl:text-lg font-medium'><StarsIcon /> Most Sold</p>
                    <h2 className='text-[#292930] mt-3 text-3xl max-xl:text-4xl font-bold mb-8'>Most Sold in eTrade Store</h2>
                </div>

                <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-10'>
                    <Product_most_sold
                        src="/../poster.webp"
                        title="3D™ wireless headset"
                        price="$400"
                        offPrice="$500"
                        buy_link="/"
                        favorite_link="/"
                        remove_link="/"
                    />

                    <Product_most_sold
                        src="/../product_08.webp"
                        title="PS2 DualShock 2 Wireless"
                        price="$29.99"
                        offPrice="$49.99"
                        buy_link="/"
                        favorite_link="/"
                        remove_link="/"
                    />

                    <Product_most_sold
                        src="/../product_02.webp"
                        title="Wired Keyboard"
                        price="$32.99"
                        offPrice="$55.99"
                        buy_link="/"
                        favorite_link="/"
                        remove_link="/"
                    />
                    <Product_most_sold
                        src="/../product_03.webp"
                        title="Logitech Streamcam"
                        price="$199"
                        offPrice="$219"
                        buy_link="/"
                        favorite_link="/"
                        remove_link="/"
                    />

                    <Product_most_sold
                        src="/../product_04.webp"
                        title="3D™ wireless headset"
                        price="$387"
                        offPrice="$417"
                        buy_link="/"
                        favorite_link="/"
                        remove_link="/"
                    />
                    <Product_most_sold
                        src="/../product_05.webp"
                        title="Bass Meets Clarity"
                        price="$233"
                        offPrice="$400"
                        buy_link="/"
                        favorite_link="/"
                        remove_link="/"
                    />

                </div>
            </div>
        </div>
    )
}

export default Most_sold
