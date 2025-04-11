// import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  // Get the loading state from Redux store to show spinner while async actions happen (like API calls)
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {/* Show spinner while loading is true */}
      {loading ? (
        <div className="spinner"></div>
      ) : (
        // If not loading, show the main content
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          {/* Left side: Form and description */}
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            {/* Page title */}
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>

            {/* Page description with stylized second part */}
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>

            {/* Conditionally render SignupForm or LoginForm based on formType */}
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

          {/* Right side: Image section with decorative background */}
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            {/* Background frame image */}
            <img
              src={frameImg}
              alt="Decorative frame background"
              width={558}
              height={504}
              loading="lazy"
            />
            {/* Foreground image placed above the frame */}
            <img
              src={image}
              alt="Happy students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
