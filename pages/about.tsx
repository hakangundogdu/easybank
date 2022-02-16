import React from 'react'
function Index() {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="dark:bg-gray-800 flex w-full flex-col-reverse rounded bg-white p-32 shadow lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="pt-4 pb-4 pl-4 pr-4 lg:pt-6 lg:pb-6 lg:pl-6 lg:pr-6">
            <div className="flex flex-row-reverse items-center justify-between lg:flex-col lg:items-start">
              <h4 className="text-indigo-700 dark:text-indigo-600 text-base leading-4 tracking-normal">
                12:00pm
              </h4>
              <h4 className="text-gray-600 dark:text-gray-400 text-base font-normal lg:mt-3">
                23 December, Sunday
              </h4>
            </div>
            <h2 className="text-gray-800 dark:text-gray-100 mt-4 mb-2 text-xl font-bold tracking-normal lg:text-2xl">
              CES - The Global Stage for Innovation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 w-11/12 text-sm font-normal tracking-normal lg:w-9/12">
              The Consumer Technology Association’s CES 2020 will take place on
              7-10 January at the Las Vegas Convention Center in Nevada. It will
              bring together over 150,000 delegates and 4,500 exhibitors to
              explore the business of consumer technologies.
            </p>
            <div className="flex flex-col items-start lg:flex-row lg:items-center">
              <div className="flex items-center">
                <div className="dark:border-gray-700 h-6 w-6 rounded-full border-2 border-white shadow">
                  <img
                    className="h-full w-full overflow-hidden rounded-full object-cover"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg"
                    alt="avatar"
                  />
                </div>
                <div className="dark:border-gray-700 -ml-2 h-6 w-6 rounded-full border-2 border-white shadow">
                  <img
                    className="h-full w-full overflow-hidden rounded-full object-cover"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg"
                    alt="avatar"
                  />
                </div>
                <div className="dark:border-gray-700 -ml-2 h-6 w-6 rounded-full border-2 border-white shadow">
                  <img
                    className="h-full w-full overflow-hidden rounded-full object-cover"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg"
                    alt="avatar"
                  />
                </div>
                <div className="dark:border-gray-700 -ml-2 h-6 w-6 rounded-full border-2 border-white shadow">
                  <img
                    className="h-full w-full overflow-hidden rounded-full object-cover"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg"
                    alt="avatar"
                  />
                </div>
                <div className="dark:border-gray-700 -ml-2 h-6 w-6 rounded-full border-2 border-white shadow">
                  <img
                    className="h-full w-full overflow-hidden rounded-full object-cover"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg"
                    alt="avatar"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-1 text-xs font-normal">
                  +12 Attendees
                </p>
              </div>
              <div className="mt-4 ml-0 flex items-end lg:mt-0 lg:ml-12">
                <span className="text-gray-600 dark:text-gray-400 mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-pin"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={11} r={3} />
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm font-normal tracking-normal">
                  Las Vegas, Nevada
                </p>
              </div>
            </div>
          </div>
          <div className="border-gray-300 flex flex-row items-center justify-between border-t px-5 py-3 md:px-10 lg:px-5 lg:py-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
                  <input
                    defaultChecked
                    type="radio"
                    name="radio"
                    className="checkbox border-gray-400 absolute h-full w-full cursor-pointer appearance-none rounded-full border checked:border-none focus:outline-none"
                  />
                  <div className="check-icon border-black dark:border-gray-700 z-1 hidden h-full w-full rounded-full border-4" />
                </div>
                <p className="text-gray-800 dark:text-gray-100 ml-3 text-base font-normal leading-4">
                  Going
                </p>
              </div>
              <div className="ml-6 flex items-center">
                <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
                  <input
                    type="radio"
                    name="radio"
                    className="checkbox border-gray-400 absolute h-full w-full cursor-pointer appearance-none rounded-full border checked:border-none focus:outline-none"
                  />
                  <div className="check-icon border-black dark:border-gray-700 z-1 hidden h-full w-full rounded-full border-4" />
                </div>
                <p className="text-gray-800 dark:text-gray-100 ml-3 text-base font-normal leading-4">
                  Not Going
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-gray-600 dark:text-gray-400 hover:text-gray-700 mr-4 cursor-pointer">
                <svg
                  className="feather feather-bookmark"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="text-indigo-700 dark:text-indigo-600 hover:text-indigo-600 cursor-pointer">
                <svg
                  className="feather feather-share-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={18} cy={5} r={3} />
                  <circle cx={6} cy={12} r={3} />
                  <circle cx={18} cy={19} r={3} />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative inline-block h-64 w-full rounded-t lg:h-auto lg:w-1/2 lg:rounded-t-none lg:rounded-r">
          <img
            className="absolute inset-0 h-full w-full rounded-t object-cover lg:rounded-r lg:rounded-t-none"
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png"
            alt="banner"
          />
        </div>

        <style>
          {` .checkbox:checked { 
                                    border: none;
                                }
                                .checkbox:checked + .check-icon {
                                    display: flex;
                                }`}
        </style>
      </div>
      {/* Card code block end */}
    </>
  )
}
export default Index
