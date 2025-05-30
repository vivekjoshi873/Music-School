"use client"
import React from 'react'
import courseData from '../data/music_course.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';
interface Course {
  id: number;
  title: string;
  slug: string,
  price: number,
  description: string;
  instructor: string,
  image: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
  return (
    <div
      className='py-12 bg-gray-900'>
      <div
        className='text-center '>
        <h2
          className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Courses</h2>
        <p
          className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-300 sm:text-4xl'>Learn With the best</p>
      </div>
      <div
        className='mt-10'

      >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {featuredCourses.map((course: Course) => (
            <div
              key={course.id}
              className="flex justify-center">
              <BackgroundGradient
                className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'
              >
                <div
                  className='p-4 sm-p-6 flex flex-col items-center text-center flex-grow'
                >
                  <p
                    className='text-lg font-semibold text-gray-900 mt-4 mb-2 sm:text-xl dark:text-neutral-200'>
                    {course.title}
                  </p>
                  <p
                    className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'
                  >
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className='mt-4 px-4 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition duration-300'
                    >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>

      </div>
      <div
        className='mt-20 text-center'
      >
        <Link href='/courses'
          className='text-teal-600 hover:text-teal-700 px-4 py-2 rounded border border-neutral-600 bg-white hover:bg-gray-100 transition duration-300'>
          View All Courses
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
