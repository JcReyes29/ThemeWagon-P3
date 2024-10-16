

export default function Testimonial() {
  return (
    <>
      <div className='flex flex-col items-center bg-slate-50 h-full'>
        <header className='flex flex-col items-center py-3 gap-4 md:mx-96 px-28 sm:mx-auto'>
          <h1 className='text-3xl font-semibold font-sans'>What our clients have to say</h1>
          <p className='dark:text-gray-500 text-center'>Our success is determined on how satisfied our customers are with the service. These reviews say we have stuff to do.</p>
        </header>
        <div className="flex flex-col items-center bg-transparent rounded-lg  md:flex-row mt-12 gap-12">
          <img width={350} className="object-cover rounded-t-lg  md:rounded-none md:rounded-s-lg" src='/page7/Frame 439.svg' alt="" />
          <div className="flex flex-col justify-between py-4 leading-normal gap-5 md:max-w-md">
            <img width={60} src="/page7/Quote Icon.svg" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-800">Outstanding!!</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">I just wanted to drop you a little email to say thank you for all your hard work. I m delighted I chose you as my partner. Your websites are quite simple to edit and maintain, which is fantastic.</p>
            <img width={100} src="/page7/Rating.svg"/>
            <h6 className="font-semibold"> <strong>Daniel Lane</strong>, Developer</h6>
          </div>
        </div>
      </div>
    </>
  )
}
