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
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 md:space-x-reverse">
                    <div className="flex justify-between">
                        <a href="#">
                            <Image
                                src="/logo.png" 
                                width={120} 
                                height={50}
                                alt="Aman Logo"
                            />
                        </a>
                        <button className="text-gray-500 outline-none md:hidden"
                        >
                            
                        </button>
                    </div>
                    <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 hidden`}>
                        <li className="order-2 pb-5 md:pb-0">
                            <a href="#" className="py-3 px-6 rounded-md shadow-md text-white text-center bg-cyan-500 focus:shadow-none block md:inline">
                                تسجيل الدخول
                            </a>
                        </li>
                        <div className="order-1 flex-1 justify-center flex gapItems items-center space-y-5 md:flex md:space-x-6 md:space-x-reverse md:space-y-0">
                            {
                                navigation.map((item, idx) => (
                                    <li className="text-gray-500 hover:text-cyan-600" key={idx}>
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