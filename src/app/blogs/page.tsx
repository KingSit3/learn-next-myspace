import Link from "next/link"
import { IBlog } from "../api/blogs/route"

const getBlogs = async () => {
  const res = await fetch('http://localhost:3000/api/blogs')
  return res.json()
}


export default async () => {

  const blogs = await getBlogs()

  return (
    <div className="p-10">
      
      <div className="space-y-4">
        {blogs?.map((blog:IBlog) => {
          return (
            <div>
              <Link href={`/blogs/${blog.id}`}>
                <div key={blog.id} className="bg-red-500 p-2 rounded">
                  <h1>{blog.title}</h1>
                  <p>{blog.content}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}