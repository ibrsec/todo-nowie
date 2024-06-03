import Link from "next/link"

const HomeComponent = () => {
  return (
    <div className="bg-violet-200 min-h-screen">


    <div className="container mx-auto max-h-screen py-1 text-center ">
        <img src="/images/homehero.png" alt="hero" className=" my-10 mx-auto h-[400px] object-fit-contain " data-test="home-hero"  />
       <Link href="/login">
        <button className="py-3 px-28 text-xl text-violet-200 hover:text-violet-100 active:text-violet-300 bg-violet-600  hover:bg-violet-700 active:bg-violet-500 rounded-lg" data-test="home-getstartted">Get Started</button>
       </Link>
    </div>
    </div>
  )
}

export default HomeComponent