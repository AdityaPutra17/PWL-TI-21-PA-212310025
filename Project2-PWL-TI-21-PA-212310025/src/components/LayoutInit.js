import React from 'react'
import Header from './Header'
import Footer from './Footer'

const LayoutInit = ({children}) => {
  return (
    <div className='container'>
        <div className="">
            <Header/>

            <section className=''>
                <div className="">
                    {children}
                </div>
            </section>

            <Footer/>
        </div>
    </div>
  )
}

export default LayoutInit