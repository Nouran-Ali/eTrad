import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";
import QRCode from "react-qr-code";
import { FacebookFilled, InstagramOutlined, TwitterOutlined, LinkedinFilled } from '@ant-design/icons';
import Image from "next/image";

const Footer = () => {
    return (
        <div className={`mt-8 ${styles.footer} mx-8`}>
            <div className='px-32 max-xl:px-10'>
                <div className='grid grid-cols-4 max-xl:grid-cols-2 gap-10 pt-8'>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Support</h3>
                        <div className="text-[#777]">
                            <p>685 Market Street,
                                Las Vegas, LA 95820,
                                United States.</p>
                            <p className="mt-4">example@domain.com</p>
                            <p className="mt-3">(+02) 01019818304</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Account</h3>
                        <div className="text-[#777]">
                            <p><Link href="/">My Account</Link></p>
                            <p className="mt-2"><Link href="/">Login</Link></p>
                            <p className="mt-2"><Link href="/">Cart</Link></p>
                            <p className="mt-2"><Link href="/">Wishlist</Link></p>
                            <p className="mt-2"><Link href="/">Shop</Link></p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Link</h3>
                        <div className="text-[#777]">
                            <p><Link href="/">About Us</Link></p>
                            <p className="mt-2"><Link href="/">Privacy Policy</Link></p>
                            <p className="mt-2"><Link href="/">Terms Of Use</Link></p>
                            <p className="mt-2"><Link href="/">Contact</Link></p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Download App</h3>
                        <div className="text-[#777]">
                            <p className="mb-3">Save $3 With App & New User only</p>
                            <div style={{ height: "auto", marginTop: "20", maxWidth: 80, width: "100%" }}>
                                <QRCode
                                    size={356}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    value="https://github.com/Nouran-Ali?tab=repositories"
                                    viewBox={`0 0 256 256`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.footer} mt-4 py-5 text-[#777]`}>
                <div className="px-32 max-xl:px-10 flex items-center justify-between">
                    <div className="flex text-lg">
                        <FacebookFilled />
                        <InstagramOutlined className="ml-6"/>
                        <TwitterOutlined className="ml-6"/>
                        <LinkedinFilled className="ml-6"/>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">© 2023. All rights reserved by Axilthemes.</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm mr-3">Accept For</p>
                        <Image src="/../paypal.png" width={20} height={200} className='' />
                        <Image src="/../card.png" width={40} height={200} className='' />
                        <Image src="/../visa.png" width={40} height={200} className='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
