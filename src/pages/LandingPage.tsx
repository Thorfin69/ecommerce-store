import React from 'react'
import '../styles/LandingPage.css'

const LandingPage = ({ }) => {
    return (
        <main className=''>
            <h1
                className="title justify-center align-middle flex mt-12 text-3xl md:text-6xl  ">
                Welcome To Our ‎
                <span className='text-white font-semibold rounded-[4px] bg-black'>Store</span>
            </h1>
            <h4
                className='subtitle justify-center align-middle flex mt-12 text-2xl md:text-4xl'>
                Our Products
            </h4>
            <div className="sliding-box mt-10 ">
                <div className="product-animation ]">
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="product" />
                    <img
                        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="product" />
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="product" />
                    <img
                        src="https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="product" />
                </div>
                <div className="buttons flex mt-10 gap-2 ">
                    <button className='bg-black text-white rounded-[2px] w-[10vh] hover:bg-slate-950'>Sign In</button>
                    <button className='bg-black text-white rounded-[2px] w-[10vh] hover:bg-slate-950'>Log In</button>
                    <button className='bg-black text-white rounded-[2px] w-[10vh] hover:bg-slate-950'>Explore</button>
                </div>

            </div>
        </main>
    )
}

export default LandingPage