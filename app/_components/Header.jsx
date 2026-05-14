"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '../../components/ui/button'
import { useUser,UserButton } from '@clerk/nextjs'
import Link from 'next/link'
function Header() {
const {user,isSignedIn} = useUser();

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image src={'/logo.svg'} 
      alt="logo" 
      width={160} 
      height={100}
      />
      {isSignedIn?
      <UserButton/> : 
      <Link href="/sign-in">
      <Button className="h-12 px-6 text-base bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all">Get Started</Button>
      </Link>
      }
    </div>
  )
}

export default Header
