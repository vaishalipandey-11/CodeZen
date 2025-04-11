import React from "react";
import { TypeAnimation } from "react-type-animation"; // For typing animation in the code block
import { FaArrowRight } from "react-icons/fa"; // Arrow icon for button
import CTAButton from "../HomePage/Button"; // Custom button component
// import ColorPicker from 'react-best-gradient-color-picker'; // (Unused here, maybe for future use)

// CodeBlocks component accepts several props to dynamically render UI
const CodeBlocks = ({
  position,          // Flex direction: 'lg:flex-row' or 'lg:flex-row-reverse'
  heading,           // JSX content for the heading
  subheading,        // Text below the heading
  ctabtn1,           // CTA Button 1 details (text, link, active)
  ctabtn2,           // CTA Button 2 details (text, link, active)
  codeblock,         // The code text to animate
  backgroudGradient, // Optional gradient (not used directly here)
  codeColor          // Optional code color (not used directly here)
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between flex-col gap-10`}>
      {/* Section 1: Left Side - Heading, Subheading, Buttons */}
      <div className='w-[100%] lg:w-[50%] flex flex-col gap-8'>
        {heading}
        <div className='text-richblack-300 text-base font-bold w-[85%] -mt-3 '>
          {subheading}
        </div>

        {/* CTA Buttons */}
        <div className='flex gap-7 mt-7'>
          {/* Button 1 with icon */}
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className='flex gap-2 items-center'>
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          {/* Button 2 */}
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2: Right Side - Animated Code Block */}
      <div className='h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]'> 
        {/* Background gradient blur circle */}
        <div className='absolute gradient-custom w-[373px] h-[257px] rounded-full blur-2xl opacity-20 -left-2 -top-2'></div>

        {/* Code line numbers */}
        <div className='text-center flex select-none flex-col w-[10%] text-richblack-400 font-inter font-bold'>
          {/* Static line numbers */}
          {[...Array(11)].map((_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>
        
        {/* Code animation area */}
        <div className="w-[90%] flex flex-col gap-2 font-bold font-mono pr-1 p-4 rounded-md gradient-background">
          <TypeAnimation
            sequence={[codeblock, 2000, ""]} // Show codeblock -> wait -> clear -> repeat
            repeat={Infinity}
            cursor={true}
            className="animated-code"
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
