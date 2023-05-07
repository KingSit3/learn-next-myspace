

export async function generateMetadata({ params }:any) {

}

export default ({params}: any) => {
  return (
    <div className="">
      Blog Detail {params.id}
    </div>
  )
}