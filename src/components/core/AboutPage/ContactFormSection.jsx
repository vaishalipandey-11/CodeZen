import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    // Wrapper for the entire contact section
    <div className='mx-auto'>

      {/* Heading */}
      <h1 className='text-center text-4xl font-semibold'>
        Get in Touch
      </h1>

      {/* Subheading */}
      <p className='text-center text-richblack-300 mt-3'>
        We'd love to hear from you, please fill out this form.
      </p>

      {/* Contact Form */}
      <div className='mt-12 mx-auto'>
        <ContactUsForm />
      </div>
      
    </div>
  )
}

export default ContactFormSection
