
export default function Blog() {
  return (
    <>
      <div className='flex flex-col gap-14 items-center'>
        <header className='flex flex-col items-center py-3 gap-4 md:mx-96 px-28 sm:mx-auto'>
          <h1 className='text-3xl font-semibold font-sans'>Blog post</h1>
          <p className='dark:text-gray-500 text-center'>Blogs are a great method to increase traffic and generate leads. Make a profit. Get compensated for your efforts.</p>
        </header>
        <div className=" flex gap-5 justify-center max-md:grid ">
          <div className="card border rounded-3xl p-4 flex flex-col">
            <img src='/page8/Overhead1.svg' />
          </div>
          <div className="card border rounded-3xl p-4 flex flex-col">
            <img src='/page8/Overhead2.svg' />
          </div>
          <div className="card border rounded-3xl p-4 flex flex-col">
            <img src='/page8/Overhead3.svg' />
          </div>

        </div>
        <button href="#" className="flex-col inline-flex bg-gradient-to-r from-purple-500 to-purple-300 items-center px-2 py-1 text-sm font-medium text-center border-2  text-blue-700 rounded-lg  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 w-24">
          View All
        </button>

      </div>

    </>
  )
}
