import React from 'react'
import Navbar from './Navbar'
import Campaign from './Campaign';
// import Footer from './Footer';

const Layout = ({ children }) => {

    return (
        <>
            <div>
                <Campaign />
                <Navbar />
                <div className=''>
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}
export default Layout;