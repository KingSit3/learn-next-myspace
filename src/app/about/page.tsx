import { Metadata } from "next"

export const dynamic = 'force-static' // Force this page to be Statis Page

export const metadata: Metadata = {
  title: "About"
}

export default () => {
  return (
    <div className="">About Desu~</div>
  )
}