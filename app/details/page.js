
export default function Details() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-6 my-3 bg-slate-50'>

        <div className="flex flex-col items-center bg-transparent rounded-lg  md:flex-row md:max-w-2xl   gap-12 p-2">
          <img className="object-cover w-full rounded-t-lg  md:h-auto md:w-72 md:rounded-none md:rounded-s-lg" src='/page3/image.svg' alt="" />
          <div className="flex flex-col justify-between py-4 leading-normal gap-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">A creative team which builds stunning UI/UX</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">Today,I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience. The most stunning, cutting-edge UI/UX</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>ThemeWagon</strong></p>
            <div href="#" className="inline-flex items-center p-1 text-sm font-medium text-center border-2 border-blue-700  text-blue-700 rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 w-24">
              Read more
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-transparent rounded-lg  md:flex-row md:max-w-2xl   gap-12 p-2" >

          <div className="flex flex-col justify-between py-4 leading-normal gap-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Devoted to defining the cutting edge</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">Today,I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience. The most stunning, cutting-edge UI/UX</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by <strong>ThemeWagon</strong></p>
            <div href="#" className="inline-flex items-center p-1 text-sm font-medium text-center border-2 border-blue-700  text-blue-700 rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 w-24">
              Read more
            </div>
          </div>
          <img className="object-cover w-full rounded-t-lg  md:h-auto md:w-72 md:rounded-none md:rounded-s-lg" src='/page3/image2.svg' alt="" />
        </div>
      </div>
    </>
  )
}
