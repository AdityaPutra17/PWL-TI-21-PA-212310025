import React from 'react'
import './header.css'
const style ={
  isi:{
    TextDecoder:"none"
  }
}

const Header = () => {
  return (
    <div className='bg-primary head' style={style.header}>
        <h1 className="">IBI Kesatuan</h1>
        <ul className="isi" style={style.isi}>
            <li className="">Home</li>
            <li className=""><span className=''>-</span></li>
            <li className="">PWL</li>
        </ul>
    </div>
  )
}

export default Header