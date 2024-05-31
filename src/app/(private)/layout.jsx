"use client";
import { useAuthContext } from "@/context/AuthProvider"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateLayout = ({children}) => {
const {currentUser} = useAuthContext()
const router = useRouter();

useEffect(() => {
  const user = JSON.parse(sessionStorage.getItem("nowieUser"));
    if(!user){
      router.replace('/login')
    }
},[currentUser])



  return (
    <div>{children}</div>
  )
}

export default PrivateLayout