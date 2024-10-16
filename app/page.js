export default function Home() {
  return (
    <>
      <div className="overflow-hidden h-full mt-0 mb-20">
      <section className="flex md:justify-end">
        <div className="flex flex-col gap-4 justify-center items-start w-80 font-sans">
          <h1 className="text-4xl">Bootstrap 5 theme</h1>
          <h2 className="text-2xl">crafted by ThemeWagon</h2>
          <p>ThemeWagon offers an wide array of category-oriented
            Free and Premium Bootstrap HTML Templates and Themes
          </p>
          <button className="border rounded-md px-2 py-1 bg-slate-800 text-white">Check Demo</button>
        </div>
        <div className="mr-0">
          <img width={900} src='page1/illustration.svg'/>
        </div>
      </section>

      </div>
      <footer className="flex gap-20 justify-center items-center border-t-2 py-8">
        <img width={125} src='page1/google.png' />
        <img width={125} src='page1/netflix.png' />
        <img width={125} src='page1/microsoft.png' />
        <img width={125} src='page1/mailbuster.png' />
        <img width={125} src='page1/themewagon.png' />
      </footer>
    </>
  );
}
