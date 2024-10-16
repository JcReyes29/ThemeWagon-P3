
export default function Contact() {
  return (
    <>
      <div className=''>
        <header className='flex flex-col items-center py-3 gap-4 md:mx-96 px-28 sm:mx-auto'>
          <h1 className='text-3xl font-semibold font-sans'>Contact Us</h1>
        </header>
        <section className='flex w-full justify-center my-20'>

          <div className="w-full max-w-sm p-4 bg-transparent border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" action="#">
              <div>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white" placeholder="Write your name" required />
              </div>
              <div>
                <input type="password" name="password" id="password" placeholder="Write your email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white" required />
              </div>
              <div className="flex items-start">
                <div className="flex">
                  <textarea id="description" rows="4" className=" p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write event description..."></textarea>
                </div>
              </div>
              <button type="submit" className="bg-violet-300 w-full text-white focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center ">Submit</button>
            </form>
          </div>


        </section>
      </div>

    </>
  )
}
