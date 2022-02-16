import React from 'react'
import IconCard from './IconCard'

const Features = () => {
  return (
    <section className=" flex  w-full flex-col bg-background2 py-24 px-12 md:-mt-24 lg:px-32">
      <div>
        <h2 className="text-4xl font-light text-primary">
          Why choose Easybank?
        </h2>
        <p className="my-6 text-lg font-light text-secondary">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="justify-items mt-6 flex flex-col items-center space-y-6 md:flex-row md:items-start md:space-y-0 md:space-x-12">
        <IconCard
          src="/images/icon-online.svg"
          title="Online Banking"
          text="Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world."
        />
        <IconCard
          src="/images/icon-budgeting.svg"
          title="Simple Budgeting"
          text="See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits."
        />
        <IconCard
          src="/images/icon-onboarding.svg"
          title="Fast Onboarding"
          text="We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away."
        />
        <IconCard
          src="/images/icon-api.svg"
          title="Open API"
          text="Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier."
        />
      </div>
    </section>
  )
}

export default Features
