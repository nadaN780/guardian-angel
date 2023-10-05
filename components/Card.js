import Image from "next/image";

export default function Card({color, text, href}) {
  return (
    <a href={href} className={`flex flex-1 flex-col gap-4 p-6 bg-slate-200 shadow-sm rounded-lg group transition-all duration-200 hover:shadow-lg ${color === 'red' ? 'hover:bg-red-400' : color === 'blue' ? 'hover:bg-blue-400' : 'hover:bg-green-400'}`}>
        <div className="flex gap-2 items-center">
            <div className="group-hover:scale-125 -rotate-90 transition-all">
            {color === 'red' ? 
                (<Image src="/assets/callred.png" alt="call icon" width={32} height={32} />) : 
            color === 'blue' ?
                (<Image src="/callblue.png" alt="call icon" width={32} height={32} />) :
                (<Image src="/assets/callgreen.png" alt="call icon" width={32} height={32} />)
            }
            </div>
            <div className="group-hover:-translate-x-1 group-hover:text-white transition-all font-medium">
                اضغط للاتصال
            </div>
        </div>
    <div className="flex items-center font-bold text-lg justify-center transition-all group-hover:text-white group-hover:scale-105">
        {text}
    </div>
    </a>
  )
}
