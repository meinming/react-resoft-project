import React from 'react'
import TypeIt from "typeit-react";
import './css/codeblock-style.css';

function Hero() {

    
  return (
    <div className="flex flex-row">
        <div className="basis-3/5 md:basis-5/7 flex-shrink-0 gap-y-6 md:gap-y-8">
            <p className='w-[90%] py-4 text-5xl sm:text-6xl md:text-6xl lg:text-[75px] md:w-4/5 font-black leading-tight md:leading-tight'>
                尝试努力让世界变得更加美好。
            </p>
            <p className='w-[70%] py-4 text-[18px] sm:text-[20px] md:text-lg lg:text-xl md:w-2/3 font-thin leading-normal text-gray-600'>
                我们始终坚信人人都有享受科技乐趣的权利，无论他们的生活条件是否优越。
            </p>
            <div className='mt-4 space-y-4'>
                <button className='rounded bg-blue-500 text-base sm:text-sm text-white py-2 px-20 sm:px-20 md:px-38 lg:px-40 flex items-center'>
                    <svg t="1688438830770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1569" width="26" height="26" ><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="#ffffff" p-id="1570"></path></svg>
                    &ensp; 在Github上找到我们
                </button>
                <button className='rounded bg-purple-500 text-base sm:text-sm text-white py-2 px-20 sm:px-20 md:px-38 lg:px-40 flex items-center'>
                <svg t="1688443809991" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2299" width="26" height="26"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#ffffff" p-id="2300"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#ffffff" p-id="2301"></path></svg>
                    &ensp; 在Bilibili上找到我们
                </button>
            </div>
            
        </div>

        <div className="basis-2/5 md:basis-2/7 flex-nowrap">
            <div id="codeblock" className='py-6 md:py-4'>
                {/* 代码框标题栏（title bar） */}
                <div className="fakeMenu">
                    <div className="fakeButtons fakeClose"></div>
                    <div className="fakeButtons fakeMinimize"></div>
                    <div className="fakeButtons fakeZoom"></div>
                </div>

                {/* 代码框工作区域（clientarea） */}
                <div className="fakeScreen">
                <div className=' text-white text-2xl leading-relaxed md:leading-relaxed'>
                    <TypeIt
                        getBeforeInit={(instance) => {
                        instance.type('Always believe something wonderful is about to happen.').pause(1750);
                        return instance;
                    }}
                    // 循环打印
                    options={{ loop: true,
                        cursor: true,
                        cursorSpeed: 1000,
                        cursorChar: "|", }}
                    ></TypeIt>

                    {/* <TypeIt><TypeCode>Always believe something wonderful is about to happen.</TypeCode></TypeIt> */}
                </div>
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Hero