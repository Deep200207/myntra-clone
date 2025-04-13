import React from 'react';

function Footer() {
    return (
        <div className='bg-slate-100 text-black'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-20 px-4 sm:px-6 md:px-10'>
                {/* Online Shopping Section */}
                <div>
                    <h1 className='font-semibold text-sm py-5'>ONLINE SHOPPING</h1>
                    <div className='flex flex-col text-slate-700 space-y-2'>
                        <span>Men</span>
                        <span>Women</span>
                        <span>Kids</span>
                        <span>Fashion</span>
                        <span>Genz</span>
                        <span>Beauty</span>
                        <span>Studio</span>
                        <span>Gift cards</span>
                    </div>
                </div>

                {/* Customer Policies Section */}
                <div>
                    <h1 className='font-semibold text-sm py-5'>CUSTOMER POLICIES</h1>
                    <div className='flex flex-col text-slate-700 space-y-2'>
                        <span>Customer</span>
                        <span>Contact</span>
                        <span>Help</span>
                        <span>Review</span>
                        <span>T&C</span>
                        <span>Term of policy</span>
                        <span>Control</span>
                        <span>Order Details</span>
                    </div>
                </div>

                {/* Useful Links Section */}
                <div>
                    <h1 className='font-semibold text-sm py-5'>USEFUL LINKS</h1>
                    <div className='flex flex-col text-slate-700 space-y-2'>
                        <span>Blog</span>
                        <span>Careers</span>
                        <span>Site map</span>
                        <span>Corporate Information</span>
                        <span>Whitehat</span>
                        <span>Cleartip</span>
                    </div>
                </div>

                {/* Guarantee and Return Policy Section */}
                <div className='py-5'>
                    <h1 className='font-semibold'>
                        100% ORIGINAL <span className='text-slate-700 font-normal'>guarantee for</span>
                    </h1>
                    <h1 className='text-slate-700 font-normal'>all products at myntra.com</h1>
                    <h1 className='font-semibold pt-6'>
                        Return within 14 days <span className='text-slate-700 font-normal'>of</span>
                    </h1>
                    <h1 className='text-slate-700 font-normal'>receiving your order</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
