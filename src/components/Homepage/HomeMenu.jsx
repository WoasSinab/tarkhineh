


function HomeMenu() {


  return (
    <div className="mx-40 flex flex-col justify-center my-20 ">
      <h1 className="animate-fade-in text-3xl font-medium text-center">منوی رستوران</h1>
      <div className="flex flex-col lg:flex-row my-64 justify-between gap-96 lg:gap-12 items-center">
        <div className="animate-slide-up relative w-80 h-40 bg-[#417F56] rounded-xl flex flex-col items-center">
          <img className="absolute bottom-12" src="https://s6.uupload.ir/files/image_dr52.png" alt="" />
          <h1 className="absolute bottom-[-12px] bg-white p-4 rounded-xl text-xl text-gray-800">نوشیدنی</h1>
        </div>
        <div className="animate-slide-up relative w-80 h-40 bg-[#417F56] rounded-xl flex flex-col items-center">
          <img className="absolute bottom-12" src="https://s6.uupload.ir/files/asdwa_8for.png" alt="" />
          <h1 className="absolute bottom-[-12px] bg-white p-4 rounded-xl text-xl text-gray-800">دسر</h1>
        </div>
        <div className="animate-slide-up relative w-80 h-40 bg-[#417F56] rounded-xl flex flex-col items-center">
          <img className="absolute bottom-12" src="https://s6.uupload.ir/files/aweaweawe_mtxc.png" alt="" />
          <h1 className="absolute bottom-[-12px] bg-white p-4 rounded-xl text-xl text-gray-800">پیش غذا</h1>
        </div>
        <div className="animate-slide-up relative w-80 h-40 bg-[#417F56] rounded-xl flex flex-col items-center">
          <img className="absolute bottom-12" src="https://s6.uupload.ir/files/wedssd_6nby.png" alt="" />
          <h1 className="absolute bottom-[-12px] bg-white p-4 rounded-xl text-xl text-gray-800">غذای اصلی</h1>
        </div>
      </div>
    </div>
  )
}

export default HomeMenu
