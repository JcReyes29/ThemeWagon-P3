
export default function Services() {
  return (

    <>
      <div className='flex flex-col gap-12 bg-slate-50'>

        <header className='flex flex-col items-center py-3 gap-4 md:mx-96 px-28 sm:mx-auto'>
          <h1 className='text-3xl font-semibold font-sans'>Service</h1>
          <p className='dark:text-gray-500 font-bold text-center'>We offer youth with chances for career development in their practice. We also support a wide range of services to ensure client satisfaction</p>
        </header>
        <div className='flex justify-center gap-5 max-sm:grid'>
          <div className="max-w-80 bg-slate-50 border border-white rounded-3xl shadow  dark:border-4 flex flex-col items-center px-5 py-6">
            <a className='py-5'>
              <img width={125} src='/page2/chat_duo.svg' alt="" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Send Texts Instantly</h5>
              </a>
              <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Financial plannig, forecasting and adjunting rapidly with customer demands and budgets.</p>
              <a className=" inline-flex bg-transparent items-center  py-2 text-sm font-bold text-center text-blue-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300focus:ring-gray-500">
                Learn More
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="rgb(29 78 216)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-80 bg-white border border-white rounded-3xl shadow  dark:border-4 flex flex-col items-center px-5 py-6">
            <a className='py-5'>
              <img width={125} src='/page2/layer_duo.svg' alt="" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Better Organized</h5>
              </a>
              <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Latest technology and experienced guidance, trained HR specialists to keep updated.</p>
              <a className=" inline-flex bg-transparent items-center  py-2 text-sm font-bold text-center text-blue-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300focus:ring-gray-500">
                Learn More
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="rgb(29 78 216)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-80 bg-slate-50 border border-white rounded-3xl shadow  dark:border-4 flex flex-col items-center px-5 py-6">
            <a className='py-5'>
              <img width={125} src='/page2/bar_chart_duo.svg' alt="" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Analytical Statistics</h5>
              </a>
              <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Messages, real-time reminders, memos, and many more will keep your team in sync.</p>
              <a className=" inline-flex bg-transparent items-center  py-2 text-sm font-bold text-center text-blue-700  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300focus:ring-gray-500">
                Learn More
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="rgb(29 78 216)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
      
    </>

  )
}
