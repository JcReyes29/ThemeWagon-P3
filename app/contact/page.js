import './contact.css'

export default function Contact() {
  return (
    <>
      <div className=''>
        <header className='flex flex-col items-center py-3 gap-4 md:mx-96 px-28 sm:mx-auto'>
          <h1 className='text-3xl font-semibold font-sans'>Contact Us</h1>
        </header>

        <section className='flex w-full py-10 justify-center'>
          <div className='fondo-imagen absolute grid'>
            <div className='flex flex-col gap-6 justify-center'>
              <div className='flex flex-col gap-1 items-center'>
                <div className='flex items-center gap-3'>
                  <img src='/page9/Iconphone.svg' alt='' />
                  <h2 className='font-semibold text-gray-600'>Phone</h2>
                </div>
                <p className='text-gray-400 pl-28 w-1/4'>+880124332334</p>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='flex items-center gap-3'>
                  <img src='/page9/Icon.svg' alt='' />
                  <h2 className='font-semibold text-gray-600'>Email</h2>
                </div>
                <p className='text-gray-400 w-1/4 pl-28'>something@email.com</p>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='flex items-center gap-3'>
                  <img src='/page9/map.svg' alt='' />
                  <h2 className='font-semibold text-gray-600'>Location</h2>
                </div>
                <p className='w-1/4 text-gray-400 pl-28'>43/A Spooner Street, St laurence, Virginia, Texas</p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm p-2 bg-transparent relative border-2 rounded-3xl border-white shadow sm:p-6 md:p-8 mr-96 mt-8">
            <form className="space-y-6" action="#">
              <div>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-white text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white" placeholder="Write your name" required />
              </div>
              <div>
                <input type="password" name="password" id="password" placeholder="Write your email" className="bg-gray-50 border text-gray-900 text-sm border-white rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white" required />
              </div>
              <div className="flex items-start">
                <div className="flex w-full">
                  <textarea id="description" rows="4" className="p-2.5 flex w-full text-sm text-gray-900 bg-gray-50 border-white rounded-2xl border dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message"></textarea>
                </div>
              </div>
              <button type="submit" className="bg-violet-300 w-full text-white focus:outline-none focus:ring-blue-300 font-sans rounded-3xl text-lg px-5 py-1 text-center ">Submit</button>
            </form>
          </div>
        </section>
      </div>

    </>
  )
}
