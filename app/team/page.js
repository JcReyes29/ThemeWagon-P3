
export default function Team() {
  return (
    <>
      <div className="bg-slate-50 flex flex-col items-center">
        <header className='flex flex-col items-center py-3 gap-4 md:mx-96 px-28 sm:mx-auto'>
          <h1 className='text-3xl font-semibold font-sans'>Our Team</h1>
          <p className='dark:text-gray-500 font-medium text-center'>People from various origins, cultures, and personalities make up our team. This blend makes it a powerful team</p>
        </header>
        <div className='flex flex-wrap sm:m-auto md:mx-14 md:my-5 justify-center '>

          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <img width={200} alt="" src='/page6/Image.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">John Adams</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">CEO</p>
          </div>
          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <img width={200} alt="" src='/page6/Image1.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">Carrey Johnson</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">Senior Developer</p>
          </div>
          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <img width={200} alt="" src='/page6/Image2.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">Ray Marie</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">Developer</p>
          </div>
          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <img width={200} alt="" src='/page6/Image3.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">Austin Min</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">Designer</p>
          </div>
        </div>
        <button href="#" className="flex-col inline-flex bg-gradient-to-r from-purple-500 to-purple-300 items-center px-2 py-1 text-sm font-medium text-center border-2  text-blue-700 rounded-lg  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 w-32">
          View Full Team
        </button>
      </div>
    </>
  )
}
