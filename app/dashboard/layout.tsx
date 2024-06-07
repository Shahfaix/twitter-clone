"use client";
import React from 'react'
import Header  from '@/components/header'
import { useUser } from '@clerk/nextjs'

const DashboardLayout = ( {children}: {children:React.ReactNode}) => {
    const {user } = useUser();
    console.log("currentuser" , user)
  return (
    <div>
    <Header user={user} />
        {children}</div>
  )
}

export default DashboardLayout