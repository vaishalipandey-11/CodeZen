import React from 'react'

// Component and asset imports
import HighlightText from "../components/core/HomePage/HighlightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/Stats'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from '../components/common/Footer'
// import ReviewSlider from "../components/common/ReviewSlider"

const About = () => {
  return (
    <div>
      {/* Section 1: Intro header with images */}
      <section className='bg-richblack-700'>
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white'>
          <header className='mx-auto py-20 text-4xl font-semibold lg:w-[70%]'>
            Driving Innovation in Online Education for a 
            <HighlightText text={"Brighter Future"} />
            <p className='mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]'>
              Studynotion is at the forefront of driving innovation in online education...
            </p>
          </header>
          
          {/* Banner image strip below heading */}
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className='absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5'>
            <img src={BannerImage1} />
            <img src={BannerImage2} />
            <img src={BannerImage3} />
          </div>
        </div>
      </section>

      {/* Section 2: Quote component */}
      <section className='border-b border-richblack-700'>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
          <div className="h-[100px]"></div>
          <Quote />
        </div>
      </section>

      {/* Section 3: Founding story, vision, mission */}
      <section>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>

          {/* Founding Story Section */}
          <div className='flex flex-col items-center gap-10 lg:flex-row justify-between '>
            {/* Left: Text content */}
            <div className='my-24 flex lg:w-[50%] flex-col gap-10'>
              <h1 className='bg-gradient-to-br ...'>Our Founding Story</h1>
              <p className='text-base font-medium text-richblack-300'>Our e-learning platform was born out of a shared vision...</p>
              <p className='text-base font-medium text-richblack-300'>As experienced educators ourselves, we witnessed...</p>
            </div>
            {/* Right: Image */}
            <div>
              <img className='shadow-[0_0_20px_0] shadow-[#FC6767]' src={FoundingStory} />
            </div>
          </div>

          {/* Vision and Mission Section */}
          <div className='flex flex-col items-center lg:gap-10 lg:flex-row justify-between'>
            {/* Vision box */}
            <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
              <h1 className='bg-gradient-to-b ...'>Our Vision</h1>
              <p className='text-base font-medium text-richblack-300'>With this vision in mind, we set out on a journey...</p>
            </div>

            {/* Mission box */}
            <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
              <h1 className='bg-gradient-to-b ...'>Our Mission</h1>
              <p className='text-base font-medium text-richblack-300'>Our mission goes beyond just delivering courses online...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Statistics */}
      <StatsComponent />

      {/* Section 5: Learning grid and contact form */}
      <section className='mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white'>
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Section 6: Reviews header (slider commented) */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About
