
const getBlog = async () => {
  const res = await fetch('http://localhost:3000/api/blogs/6060', 
  {
    cache: 'no-cache'
  })
  return res.json()
}

export async function generateMetadata({ params }:any) {

}

export default async ({params}: any) => {

  const blog = await getBlog()

  return (
    <div className="">
      Blog Detail {params.id}
    </div>
  )
}