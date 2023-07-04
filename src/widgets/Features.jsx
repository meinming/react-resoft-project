function Features() {
  return (
    <section>
      <div className="mt-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mt-12"></div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-black text-4xl sm:text-4xl md:text-4xl lg:text-[50px]">组织优势</h2>
            <p className="mt-6 text-xl leading-relaxed lg:text-[24px] text-gray-500">良好的环境是工作生活的重要一环。我们相信，和志同道合的人们一起做有意义的事是相当美好的。</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 font-black">分组工作</h4>
              <p className="text-lg text-gray-500 text-center">所有人都将根据自己擅长的工作而被分配到相应的项目组中，每个人都会在自己熟悉的领域发光发热。</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2 font-black">积极讨论</h4>
              <p className="text-lg text-gray-500 text-center">如果你在工作中遇到了困难，可以在相应领域的群组中提问发言。将会有资深的人士为你答疑解惑。</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2 font-black">广泛活动</h4>
              <p className="text-lg text-gray-500 text-center">我们在主流的平台上运营了社交账号，你可以第一时间在平台了解我们的相关信息</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Features