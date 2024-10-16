import Image from "next/image"
export default function Projects() {
  return (
    <>
      <div className='bg-slate-50'>

        <header className='flex flex-col items-center py-3 gap-4 md:mx-96 px-28 sm:mx-auto'>
          <h1 className='text-3xl font-semibold font-sans'>Our Projects</h1>
          <p className='dark:text-gray-500 font-medium text-center'>A project is a single or team activity, combining research and design with best effort. Here are some of our teams projects</p>
        </header>
        <div className='flex justify-center max-h-full border-4 p-4 border-white bg-slate-50 lg:mx-56 rounded-3xl lg:my-10 overflow-hidden'>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            <div>
              <Image width={400} height={400} className="h-auto max-w-full rounded-lg" src='/page5/Rectangle1.svg' alt="" />
            </div>
            <div>
              <Image width={400} height={400} className="h-auto max-w-full rounded-lg" src='/page5/Rectangle2.svg' alt="" />
            </div>
            <div>
              <Image width={400} height={400} className="h-auto max-w-full rounded-lg" src='/page5/Rectangle3.svg' alt="" />
            </div>
            <div>
              <Image width={400} height={400} className="h-auto max-w-full rounded-lg" src='/page5/Rectangle4.svg' alt="" />
            </div>
            <div>
              <Image width={400} height={400} className="h-auto max-w-full rounded-lg" src='/page5/Rectangle5.svg' alt="" />
            </div>
            <div>
              <Image width={400} height={400} className="h-auto max-w-full rounded-lg" src='/page5/Rectangle6.svg' alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
