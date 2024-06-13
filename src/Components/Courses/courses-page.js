import React from 'react'
import Example from './top-courses'
import Navbar from '../navbar'
import Back from '../Common/back'
import CoursesCards from './courses-cards'
import courseimg from '../../Assets/back.webp'
import Footer from '../Footer/footer'

const CoursesPage = () => {
  return (
    <>
    <Navbar/>
    <Back title={'course'} />
    <img src={courseimg} className=' max-h-screen-2xl'/>
    <Example/>
    <CoursesCards/>
    <Footer/>
    </>
  )
}

export default CoursesPage
