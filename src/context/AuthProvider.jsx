"use client";

import { auth } from "@/auth/auth";
import { toastError, toastSuccess } from "@/helper/ToastifyNotify";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider } from "firebase/auth";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    setCurrentUser(JSON.parse(sessionStorage.getItem("nowieUser")) || false);
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const getAllUsers = async (currentUser) => {
    const url = "https://665823725c361705264708f6.mockapi.io/users";

    try {
      const response = await fetch(url);
      console.log("get all users response = ", response);
      toastSuccess("get all users  successfully");
      const bodyJson = await response.json();
      return bodyJson;
      console.log("bodyJson", bodyJson);
    } catch (error) {
      toastError("get all users  is failed!");
      console.log("create Own user = ", error);
    }
  };

  const createOwnUser = async (currentUser) => {
    const url = "https://665823725c361705264708f6.mockapi.io/users";
    const allUsers = await getAllUsers();
    const isUserExist = allUsers
      .map((item) => item?.userId)
      .some((item) => item == currentUser.uid);
    if (isUserExist) {
      console.log("User is already exist!!!");
      return;
    }

    const body = {
      createdAt: new Date(),
      username: currentUser.displayName,
      email: currentUser.email,
      userId: currentUser.uid,
    };
    console.log("body", body);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...body }),
      });
      console.log("create Own user response = ", response);
      toastSuccess("Created own user successfully");
      const bodyJson = await response.json();
      console.log("bodyJson", bodyJson);
    } catch (error) {
      toastError("Createing own user is failed!");
      console.log("create Own user = ", error);
    }
  };

  const loginGoogle = async (user) => {
    setLoading(true);
    setError(false);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      setLoading(false);
      console.log("login  response = ", response);
      router.push("/dashboard");
      toastSuccess("Logged in successfully!");
      // setCurrentUser(response?.user)
    } catch (error) {
      toastError("Login is Failed");
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  const registerGoogle = async (user) => {
    setLoading(true);
    setError(false);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      setLoading(false);
      console.log("register response = ", response);

      const updateResponse = await updateProfile(auth.currentUser, {
        displayName: user.username,
        photoURL: user.imageUrl,
      });
      console.log("register-update response ia auccessfull!!!   ");

      router.push("/dashboard");
      toastSuccess("Registered successfully!");
      // setCurrentUser(response?.user)
      createOwnUser(response?.user);
    } catch (error) {
      toastError("Register is Failed");
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  const sendResetEmail = async (email) => {
    setLoading(true);
    setError(false);
    try {
      const response = await sendPasswordResetEmail(auth, email);

      setLoading(false);
      console.log("send reset email response = ", response);

      toastSuccess("Sended reset email successfully!");
    } catch (error) {
      toastError("Sending reset email is Failed");
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };
  const logOutGoogle = async (email) => {
    setLoading(true);
    setError(false);
    try {
      const response = await signOut(auth);

      setLoading(false);
      console.log("Sign out response = ", response);
      router.push("/login");
      toastSuccess("Signed out  successfully!");
    } catch (error) {
      toastError("Sign out is Failed");
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  const provider = new GoogleAuthProvider();

  const loginWithGoogleAccount = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await signInWithPopup(auth, provider);
      setLoading(false);
      console.log("google pop login response = ", response);
      router.push("/dashboard");
      toastSuccess("Google Pop Logined successfully!");
      // setCurrentUser(response?.user)
      createOwnUser(response?.user);
    } catch (error) {
      toastError("Google Pop Login is Failed");
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("logged in observer le user => ", user);
        sessionStorage.setItem("nowieUser", JSON.stringify(user));
      } else {
        console.log("logged out observer le");
        setCurrentUser(false);
        sessionStorage.setItem("nowieUser", JSON.stringify(false));
      }
    });
  }, []);

  const values = {
    currentUser,
    loginGoogle,
    registerGoogle,
    loginWithGoogleAccount,
    sendResetEmail,
    logOutGoogle,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
