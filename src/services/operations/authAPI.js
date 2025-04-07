import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice";
import { resetCart } from "../../slices/cartSlice";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector";
import { endpoints } from "../apis";

const { SENDOTP_API, SIGNUP_API, LOGIN_API, RESETPASSTOKEN_API, RESETPASSWORD_API } = endpoints;

// Error handler
const handleError = (error, defaultMessage) => {
  console.error(error?.response?.data || error.message);
  toast.error(error.response?.data?.message || defaultMessage);
};

// Higher-order function to wrap async calls
const withLoadingToast = (asyncFunc) => {
  return async (...args) => {
    const toastId = toast.loading("Loading...");
    args[0](setLoading(true)); // dispatch
    try {
      await asyncFunc(...args);
    } catch (error) {
      handleError(error, "Something went wrong");
    } finally {
      args[0](setLoading(false));
      toast.dismiss(toastId);
    }
  };
};

// Send OTP
export const sendOtp = withLoadingToast(async (dispatch, email, navigate) => {
  const response = await apiConnector("POST", SENDOTP_API, { email, checkUserPresent: true });
  if (!response.data.success) throw new Error(response.data.message);
  toast.success("OTP Sent Successfully");
  navigate("/verify-email");
});

// Sign Up
export const signUp = withLoadingToast(async (dispatch, accountType, firstName, lastName, email, password, confirmPassword, otp, navigate) => {
  const response = await apiConnector("POST", SIGNUP_API, { accountType, firstName, lastName, email, password, confirmPassword, otp });
  if (!response.data.success) throw new Error(response.data.message);
  toast.success("Signup successful");
  navigate("/login");
});

// Login
export const login = withLoadingToast(async (dispatch, email, password, navigate) => {
  const response = await apiConnector("POST", LOGIN_API, { email, password });
  if (!response.data.success) throw new Error(response.data.message);

  toast.success("Login Successful");
  dispatch(setToken(response.data.token));

  const user = response.data.existingUser;
  const userImage = user.image || `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`;
  dispatch(setUser({ ...user, image: userImage }));

  localStorage.setItem("token", JSON.stringify(response.data.token));
  localStorage.setItem("user", JSON.stringify(user));

  navigate("/dashboard/my-profile");
});

// Logout
export const logout = (navigate) => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
  dispatch(resetCart());
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  toast.success("Logged Out");
  navigate("/");
};

// Request Password Reset Token
export const getPasswordResetToken = withLoadingToast(async (dispatch, email, setEmailSent) => {
  const response = await apiConnector("POST", RESETPASSTOKEN_API, { email });
  if (!response.data.success) throw new Error(response.data.message);
  toast.success("Mail Sent Successfully");
  setEmailSent(true);
});

// Reset Password
export const resetPassword = withLoadingToast(async (dispatch, password, confirmPassword, token, navigate) => {
  const response = await apiConnector("POST", RESETPASSWORD_API, { password, confirmPassword, token });
  if (!response.data.success) throw new Error(response.data.message);
  toast.success("Password Reset Successful");
  navigate("/login");
});
