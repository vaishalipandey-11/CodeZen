import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import HighlightText from '../components/HomePage/HighlightText'

import CTAButton from "../components/HomePage/Button"

export default function Home() {
  return (
    <div>
        {/* section 1*/}
        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent  items-center
        text-white justify-between' >

          <Link to={"/signup"}>
          <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
          transition-all duration-200 hover:scale-95 w-fit' >
            <div className='flex flex-row items-center gap-2 rounded-full px-10  py-[5px]
            transition-all duration-200 group-hover:bg-richblack-900'>
               <p>Become an Instructor</p>
               <FaArrowRight/>
            </div>
          </div>
          </Link>

            <div className='text-center text-4xl font-semibold mt-7'>
             Empower Your Future with
               <HighlightText text={"Coding Skills"} ></HighlightText>
            </div>

            <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300' > 
              with our online coding courses , you can learn at your own pace , from anywhere int he world , and get access to a wealth of reasource hands-on projects, quizzes, and personalised feedback from instructors.
            </div>

             <div className='flex flex-row gap-7 mt-8'>
              <CTAButton  active={true} linkto={"/signup"}>
                Learn more
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Book a Demo
              </CTAButton>
             </div>

        </div>
        {/*section 2 */}
        {/*section 3 */}
        {/*Footer   */ }
    </div>
  )
}
