import Image from 'next/image'

export default function Header(){
  const navigation = [
      { title: "الرئيسية", path: "#" },
      { title: "توعية", path: "#" },
      { title: "الموارد والدعم ", path: "#" }
  ]
  
    return (
        <>
            <header>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i> </a>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 md:space-x-reverse">
                    <div className="flex justify-between">
                        <a href="#" className="flex">
                            <Image
                                src="/logo.png" 
                                width={120} 
                                height={50}
                                alt="Aman Logo"
                            />
                             <Image
                                src="/assets/Guardian_Angel.png" 
                                width={120} 
                                height={50}
                                alt="Aman Logo"
                                className="-mr-8"
                            />
                        </a>
                        <button className="text-gray-500 outline-none md:hidden"
                        >
                            
                        </button>
                    </div>
                    <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 hidden`}>
                        <li className="order-2 pb-5 md:pb-0">
                            <a href="#" className="py-3 px-6 rounded-md shadow-md text-white text-center bg-[#7bc7c1] focus:shadow-none block md:inline">
                                تسجيل الدخول
                            </a>
                        </li>
                        <div className="order-1 flex-1 justify-center flex gapItems items-center space-y-5 md:flex md:space-x-6 md:space-x-reverse md:space-y-0">
                            {
                                navigation.map((item, idx) => (
                                    <li className="text-gray-500 hover:text-[#7bc7c1]" key={idx}>
                                        <a href={item.path}>{item.title}</a>
                                    </li>
                                ))
                            }
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}