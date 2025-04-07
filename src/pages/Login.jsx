// Importing image used in the login page
import loginImg from "../assets/Images/login.webp"

// Importing the reusable Template component
import Template from "../components/core/Auth/Template"

function Login() {
    return (
        // Rendering the Template component with props specific to login
        <Template
            title={"Welcome Back"} // Heading text
            description1={"Build skills for today, tomorrow, and beyond."} // First line of description
            description2={"Education to future-proof your career."} // Second line of description
            image={loginImg} // Image shown on the auth page
            formType={"login"} // Determines which form to show (login or signup)
        />
    )
}

export default Login
