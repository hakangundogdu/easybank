import React from 'react'

const Main = () => {
  return (
    <div>
      <main className="flex max-h-[90]  w-full bg-background1">
        <section className=" flex w-full flex-col items-center px-6 py-12 text-center md:items-start md:py-60 md:pl-32 md:text-left lg:w-2/5 ">
          <h1 className="animate-fade text-5xl font-light text-primary md:text-6xl">
            Next generation digital banking
          </h1>
          <p className="my-6 animate-fade text-lg font-light text-secondary">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="mt-4 w-fit animate-fade rounded-full border-0 bg-gradient-to-r  from-green1 to-green2 py-2 px-6 text-white hover:bg-gradient-to-l">
            <a href="/">Request Invite</a>
          </div>
        </section>
        {/* <section className="relative ml-auto w-2/5">
          <img
            src="/images/image-mockups.png"
            alt="mockups"
            className="object-none object-left-bottom   "
          />

          <img
            src="/images/bg-intro-desktop.svg"
            alt="Pattern"
            className="absolute -top-64 -right-96 "
          />
        </section> */}
      </main>
    </div>
  )
}

export default Main
