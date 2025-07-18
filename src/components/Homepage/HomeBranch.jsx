import React from 'react';

function HomeBranch() {
  return (
    <div className="lg:mx-40 mx-8 my-12 flex flex-col lg:gap-32 gap-16 justify-center items-center">
      <h1 className="lg:text-3xl text-xl font-medium">ترخینه گردی</h1>

      <div className="w-full flex lg:flex-row flex-col gap-16">
        <div className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-xl group relative">
          <div className="w-full h-52 overflow-hidden rounded-t-xl">
            <img className="w-full h-full object-cover transition-transform duration-300 group-hover:-translate-y-4" src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="mt-2 text-2xl">شعبه ونک</h1>
            <p className="p-6 text-right text-gray-500">میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶</p>
          </div>
          <button className="my-2 bg-gradient-to-r from-[#417F56] to-[#2E5F45] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
            صفحه شعبه <span>→</span>
          </button>
        </div>
        <div className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-xl group relative">
          <div className="w-full h-52 overflow-hidden rounded-t-xl">
            <img className="w-full h-full object-cover transition-transform duration-300 group-hover:-translate-y-4" src="https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="mt-2 text-2xl">شعبه اقدسیه</h1>
            <p className="p-6 text-right text-gray-500">خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸</p>
          </div>
          <button className="my-2 bg-gradient-to-r from-[#417F56] to-[#2E5F45] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
            صفحه شعبه <span>→</span>
          </button>
        </div>
        <div className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-xl group relative">
          <div className="w-full h-52 overflow-hidden rounded-t-xl">
            <img className="w-full h-full object-cover transition-transform duration-300 group-hover:-translate-y-4" src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="mt-2 text-2xl">شعبه چالوس</h1>
            <p className="p-6 text-right text-gray-500">خیابان داریوش، نرسیده به میدان خیام، پلاک 14</p>
          </div>
          <button className="my-2 bg-gradient-to-r from-[#417F56] to-[#2E5F45] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
            صفحه شعبه <span>→</span>
          </button>
        </div>
        <div className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-xl group relative">
          <div className="w-full h-52 overflow-hidden rounded-t-xl">
            <img className="w-full h-full object-cover transition-transform duration-300 group-hover:-translate-y-4" src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="mt-2 text-2xl">شعبه اکباتان</h1>
            <p className="p-6 text-right text-gray-500">شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
          </div>
          <button className="my-2 bg-gradient-to-r from-[#417F56] to-[#2E5F45] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
            صفحه شعبه <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeBranch;