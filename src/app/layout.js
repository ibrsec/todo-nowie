import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";
import TodoProvider from "@/context/TodoProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:"Todo Nowie",
  description:"This is a todo app!", 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <TodoProvider>

          <Navbar />
          {children}
          <ToastContainer />
          </TodoProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
