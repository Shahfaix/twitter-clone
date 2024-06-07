import React from 'react'
import {UserResource} from "@clerk/types"
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import logo from "../public/assets/logoTwitter.png"
interface HeaderProps{
    user : UserResource  | null |undefined ;
}

const header = ({user}:HeaderProps) => {
  return (
    <div className=' flex bg-blue-500  h-[80px]  justify-between items-center px-2 '>
      <div>
        <Image src={logo} alt='logo' height={40} width={50}/>
      </div>

      <div className='flex flex-row gap-2'>
      <h1>
        <Link href = "">
        {user?.username}
        </Link>

      
      </h1>
      <UserButton afterSignOutUrl='/'/>
      </div>
    </div>
  )
}

export default header