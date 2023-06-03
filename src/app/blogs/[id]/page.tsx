
const getBlog = async (id:number) => {
  const res = await fetch('http://localhost:3000/api/blogs/2', {
      cache: 'no-cache'
  })
  return res.json()
}

export async function generateMetadata({ params }:any) {

}

export default async function blogDetail ({params}: any){
  const blog = await getBlog(params.id)

  return (
    <div className="">
      Blog Detail {params.id}
      {blog}
    </div>
  )
}