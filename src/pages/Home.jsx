import React from 'react'
import Header from '../module/header/Header'
import Contacts from '../module/contacts/Contacts'
import Shares from '../module/shares/Shares'
import Company from '../module/aboutCompany/Company'
import Advantage from '../module/advantage//Advantage'
import Address from '../module/address/Address'
import Social from '../module/social/Social'
import Footer from '../module/footer/Footer'
export default function Home() {
  return (
    <div className='Home__container'>
      <Header />
      <Contacts />
      <Shares />
      <Company />
      <Advantage />
      <Address />
      <Social />
      <Footer />
      <a className="scrollToTopButton" href='https://api.whatsapp.com/send?phone=+79993429096' target='_blank'>
        <img src="/image/whatsapp.png" alt="" />
      </a>
    </div>
  )
}
