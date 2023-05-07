export interface IBlog {
  id: number
  title: string 
  content:string
}

const blogs: IBlog[] = [
  {
    id: 1,
    title: "Blog 1",
    content: "Content Blog 1"
  },
  {
    id: 2,
    title: "Blog 2",
    content: "Content Blog 2"
  },
  {
    id: 3,
    title: "Blog 3",
    content: "Content Blog 3"
  },
  {
    id: 4,
    title: "Blog 4",
    content: "Content Blog 4"
  },
]

import {NextResponse} from 'next/server'

export async function GET() { // Must be UPPERCASE
  return NextResponse.json(blogs)
}