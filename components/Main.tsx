import React from 'react'

const Main = () => {
  return (
    <div>
      <main className="relative flex w-full flex-1 flex-col overflow-hidden bg-background1">
        <section className=" ml-40 flex w-1/4 flex-col justify-center py-60">
          <h1 className="animate-fade text-6xl font-light text-primary">
            Next generation digital banking
          </h1>
          <p className="my-6 animate-fade text-lg font-light text-secondary">
            Take your financial life online. Your Easybank account
            <br />
            will be a one-stop-shop for spending, saving, <br />
            budgeting, investing, and much more.
          </p>
          <div className="mt-4 w-fit animate-fade rounded-full border-0 bg-gradient-to-r  from-green1 to-green2 py-2 px-6 text-white hover:bg-gradient-to-l">
            <a href="/">Request Invite</a>
          </div>
        </section>
        <section>
          <img
            src="/images/image-mockups.png"
            alt="mockups"
            className="absolute -top-24 -right-32 z-10   "
          />

          <img
            src="/images/bg-intro-desktop.svg"
            alt="Pattern"
            className="absolute -top-64 -right-96 "
          />
        </section>
      </main>
    </div>
  )
}

export default Main
