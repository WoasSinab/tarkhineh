

function HomeBranch() {


  return (
    <div className="mx-40 my-12 flex flex-col gap-32 justify-center items-center">
      <h1 className="lg:text-3xl text-xl font-medium">ترخینه گردی</h1>

      <div className="flex flex-row gap-16">
        <div className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-xl hover:border-[#417F56]">
          <img className="w-full h-52 " src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg" alt="" />
          <h1 className="mt-2 text-2xl">شعبه ونک</h1>
          <p className=" p-6 text-right text-gray-500">میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶</p>
        </div>
        <div className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-xl hover:border-[#417F56]">
          <img className="w-full h-52" src="https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg" alt="" />
          <h1 className="mt-2 text-2xl">شعبه اقدسیه</h1>
          <p className="p-6 text-right text-gray-500">خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸</p>
        </div>
        <div className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-xl hover:border-[#417F56]">
          <img className="w-full h-52" src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg" alt="" />
          <h1 className="mt-2 text-2xl">شعبه چالوس</h1>
          <p className="p-6 text-right text-gray-500">خیابان داریوش، نرسیده به میدان خیام، پلاک 14</p>
        </div>

        <div className="flex flex-col gap-4 items-center border-2 border-gray-200 rounded-xl hover:border-[#417F56]">
          <img className="w-full h-52" src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg" alt="" />
          <h1 className="mt-2 text-2xl">شعبه اکباتان</h1>
          <p className="p-6 text-right text-gray-500">شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
        </div>
      </div>
    </div>
  )
}

export default HomeBranch
