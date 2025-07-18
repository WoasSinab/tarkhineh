

function HomeAbout() {


  return (
    <div className="flex my-24 py-24 flex-col-reverse lg:flex-row gap-24 text-white relative w-full inset-0 bg-cover bg-center transition-opacity duration-700" style={{ backgroundImage: "url(https://s6.uupload.ir/files/about_uq71.png)" }}>
      <div className="lg:my-16 lg:mx-40 mx-6 flex flex-col justify-between  lg:w-1/2 gap-16">
        <div className="flex flex-row justify-between ">
          <div  className=" lg:text-2xl text-md flex  flex-col  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V2"/><path d="m19 7l-3.118 3.926c-.477.602-.716.903-.99 1.05a1.5 1.5 0 0 1-1.357.029c-.28-.135-.531-.425-1.035-1.005c-.503-.58-.755-.87-1.035-1.005a1.5 1.5 0 0 0-1.356.03c-.274.146-.513.447-.99 1.048L6 15"/></g></svg>
            <p className="mt-8">کیفیت بالای غذا ها</p>
          </div>
          <div className=" lg:text-2xl text-md flex  flex-col  items-center">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75"/></g></svg></div>
            <p className="mt-8">پرسنلی مجرب و حرفه ای</p>
          </div>
        </div>
        <div  className="flex flex-row justify-between ">
          <div className=" lg:text-2xl text-md flex  flex-col  items-center">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill="currentColor" d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/></svg></div>
            <p className="mt-8">منوی متنوع</p>
          </div>
          <div className=" lg:text-2xl text-md flex  flex-col  items-center">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083c.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183c.54 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012c-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937Z"/><path stroke-linecap="round" d="M6 11.682c3.314-3.576 8.686-3.576 12 0M8 13.841c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"/></g></svg></div>
            <p className="mt-8">محیطی دلنشین و آرام</p>
          </div>
        </div>

      </div>


      <div className="lg:my-16 lg:mx-40 mx-6 text-right lg:w-1/2">
        <h1 className="text-3xl mb-8">رستوران‌های زنجیره‌ای ترخینه</h1>
        <p className="leading-10">مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.</p>
        <button className="mt-16 px-6 py-3 border-gray-200 border hover:bg-gray-200 hover:text-gray-800 ">
          <a href="#">اطلاعات بیشتر</a>
        </button>
      </div> 
    </div>
  )
}

export default HomeAbout
