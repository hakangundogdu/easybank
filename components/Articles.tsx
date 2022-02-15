import React from 'react'
import ImageCard from './ImageCard'

const Articles = () => {
  return (
    <section className=" flex  w-full flex-col bg-background1 py-32 px-40">
      <div>
        <h2 className="text-4xl font-light text-primary">Latest Articles </h2>
      </div>
      <div className="justify-items mt-12 flex space-x-24">
        <ImageCard
          src="/images/image-currency.jpg"
          author="By Claire Robinson"
          title="Receive money in any currency with no fees"
          text="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        />
        <ImageCard
          src="/images/image-restaurant.jpg"
          author="By By Wilson Hutton"
          title="Treat yourself without worrying about money"
          text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        />
        <ImageCard
          src="/images/image-plane.jpg"
          author="By By Wilson Hutton"
          title="Take your Easybank card wherever you go"
          text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        />
        <ImageCard
          src="/images/image-confetti.jpg"
          author="By Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        />
      </div>
    </section>
  )
}

export default Articles
