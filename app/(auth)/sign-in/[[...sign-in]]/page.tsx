import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex  justify-center items-center h-screen w-full'><SignIn path='/sign-in'/></div>
  )
}

export default page