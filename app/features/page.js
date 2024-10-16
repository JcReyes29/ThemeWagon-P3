import Image from "next/image"
export default function Features() {
  return (
    <>
      <div className='flex flex-col gap-6 bg-slate-50'>
        <header className='flex flex-col items-center py-3 gap-4 md:mx-96 px-28 sm:mx-auto'>
          <h1 className='text-3xl font-semibold font-sans'>Features</h1>
          <p className='dark:text-gray-500 font-bold text-center'>We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system</p>
        </header>
        <div className='flex flex-wrap gap-10 sm:m-auto md:mx-14 justify-center '>

          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <Image width={90} height={90} alt="" src='/page4/Icon.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">Encrypted Mail</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">A process of encrypting email communications</p>
          </div>
          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <Image width={90} height={90} alt="" src='/page4/Icon1.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">Display Sharing</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">With other participants, you may share your screen</p>
          </div>
          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <Image width={90} height={90} alt="" src='/page4/Icon2.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">Private Notebook</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">Private Notebook is an application that is protected</p>
          </div>
          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <Image width={90} height={90} alt="" src='/page4/Icon3.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">App App Assitance</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">App Assistant is quickly and effectively ran the system</p>
          </div>
          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <Image width={90} height={90} alt="" src='/page4/Icon4.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">Multiple Printing</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">Our canvas prints are crafted on top-notch canvas.</p>
          </div>
          <div href="#" className="flex flex-col gap-3 items-center max-w-72 p-4 rounded-lg">
            <Image width={90} height={90} alt="" src='/page4/Icon5.svg' />
            <h5 className="mt-2 font-semibold text-gray-950 text-center">Free Sketch</h5>
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">Our canvas prints are crafted on top-notch canvas</p>
          </div>

        </div>
      </div>


    </>
  )
}
