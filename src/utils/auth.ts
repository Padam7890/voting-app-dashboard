import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

// Define the JWT token type
interface JwtPayload {
  iat: number; // Issued at time in seconds since the Unix epoch
  [key: string]: any; // Additional properties
}

// Define a constant for token lifespan (in seconds)
const TOKEN_LIFESPAN = 3600; // 1 hour

// Save token to sessionStorage
export const saveToken = (token: string) => {
  sessionStorage.setItem("authToken", token);

  // Save the token expiration date
  const expirationDate = getJwtExpirationDate(token);
  if (expirationDate) {
    sessionStorage.setItem("authTokenExpiry", expirationDate.toISOString());
  }
};

// Save XPI key to sessionStorage
export const saveXPIKey = (key: string) => {
  sessionStorage.setItem("XPIKey", key);
};

// Retrieve token from sessionStorage
export const getToken = () => {
  const token = sessionStorage.getItem("authToken");

  if (!token) return null;

  // Check if the token is expired
  const expirationDate = getTokenExpirationDate();
  if (expirationDate && new Date() > expirationDate) {
    clearToken(); // Clear the token if expired
    redirectToSignIn(); // Redirect to sign-in page
    return null;
  }

  return token;
};

// Retrieve XPI key from sessionStorage
export const getXPIKey = () => {
  const xapiKey = sessionStorage.getItem("xpiKey");
  // if (!xapiKey) {

  // }
  return xapiKey;
};

// Clear token and its expiration date from sessionStorage
export const clearToken = () => {
  sessionStorage.removeItem("authToken");
  sessionStorage.removeItem("authTokenExpiry");
};

// Clear XPI key from sessionStorage
export const clearXPIKeySession = () => {
  sessionStorage.removeItem("XPIKey");
};

// Function to get the expiration date from the token
const getJwtExpirationDate = (token?: string): Date | null => {
  try {
    if (!token) {
      token = sessionStorage.getItem("authToken") || "";
    }
    const decodedToken = jwtDecode<JwtPayload>(token);
    const iat = decodedToken.iat;
    if (iat) {
      const expirationDate = new Date(iat * 1000 + TOKEN_LIFESPAN * 1000); // Convert from seconds to milliseconds
      return expirationDate;
    }
  } catch (error) {
    console.error("Error decoding JWT token:", error);
  }
  return null; // Return null if unable to get the expiration date
};

// Function to get the expiration date from sessionStorage
const getTokenExpirationDate = (): Date | null => {
  const expiryString = sessionStorage.getItem("authTokenExpiry");
  if (expiryString) {
    return new Date(expiryString);
  }
  return null;
};

// Function to redirect to the sign-in page
const redirectToSignIn = () => {
  if (typeof window !== "undefined") {
    const router = useRouter();
    router.push("/auth/signin");
  }
};
