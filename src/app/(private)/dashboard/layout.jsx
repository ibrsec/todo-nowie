import React from 'react'

export const metadata = {
    title:"Dashboard | Todo Nowie",
    description:"Dashboard page of Todo Nowie", 
  }



const DashboardLayout = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default DashboardLayout