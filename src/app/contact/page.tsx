"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Meteors } from '@/components/ui/meteors'

function page() {
  return (
    <div className='min-h-screen bg-gray-900 py-12 pt-36'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-white mb-7'>Contact Us</h1>
        <Input type="email" placeholder="Email" className='w-[15rem] my-2 mt-3' />
        <Input type="password" placeholder="Password" className='w-[15rem] my-2' />
        <Input type="password" placeholder="Confirm Password" className='w-[15rem] my-2' />
        <Meteors className='h-10 w-10 text-center ' />
        <Button className=' my-2   cursor-pointer'>Submit</Button>
      </div>
    </div>
  )
}

export default page
