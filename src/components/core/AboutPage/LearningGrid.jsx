// Importing required dependencies and components
import React from 'react'
import HighlightText from '../HomePage/HighlightText';  // Custom component to highlight text
import CTAButton from "../../core/HomePage/Button";     // Call-to-action button component

// Array containing information for each learning grid card
const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere", // Text that will be highlighted using HighlightText component
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    // Other cards don't have buttons or highlight text
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
];

// Functional component to render the learning grid
const LearningGrid = () => {
  return (
    <div className='grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12'>
      {
        // Mapping through each item in the LearningGridArray
        LearningGridArray.map((card, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"} // Make the first card span two columns
              ${
                card.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5" // Odd/even card backgrounds
              }
              ${card.order === 3 && "lg:col-start-2"} // Center the 4th card
              ${card.order < 0 && "bg-transparent"} // No background for the intro card
              `}
            >
              {
                // If order is less than 0, render the intro card differently
                card.order < 0 
                ? (
                    <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>
                      {/* Heading with highlighted part */}
                      <div className='text-4xl font-semibold'>
                        {card.heading}
                        <HighlightText text={card.highlightText} />
                      </div>

                      {/* Description text */}
                      <p className='font-medium'>
                        {card.description}
                      </p>

                      {/* Button at the bottom */}
                      <div className='w-fit mt-4'>
                        <CTAButton active={true} linkto={card.BtnLink}>
                          {card.BtnText}
                        </CTAButton>
                      </div>
                    </div>
                  )
                : (
                  // Default layout for other cards
                  <div className='flex flex-col gap-8 p-7'>
                    <h1 className='text-richblack-5 text-lg'>
                      {card.heading}
                    </h1>
                    <p className='text-richblack-300 font-medium'>
                      {card.description}
                    </p>
                  </div>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default LearningGrid
