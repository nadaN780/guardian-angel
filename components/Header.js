'use client'

import Image from 'next/image'
import styles from '@/styles/nav.module.css'
import { useState } from 'react'

export default function Header(){
  const [isChecked, setIsChecked] = useState(false);
  const navigation = [
      { title: "الرئيسية", path: "#" },
      { title: "توعية", path: "#" },
      { title: "الموارد والدعم ", path: "#" }
  ]
  const toggle = () => {
    setIsChecked(!isChecked);
  }
    return (
        <>
            <header>
                <nav className="items-center h-24 sm:pt-3 z-50 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 md:space-x-reverse">
                    <div className="flex justify-between">
                        <a href="#" className={`${isChecked && 'scale-110'} items-center transition-transform flex z-[100]`}>
                            <Image
                                src="/logo.png" 
                                width={180} 
                                height={50}
                                alt="Aman Logo"
                                className="-mr-16"
                            />
                             <Image
                                src="/assets/Guardian_Angel.png"
                                width={120} 
                                height={50}
                                alt="Aman Logo"
                                className="-mr-16"
                            />
                        </a>
                        <div className="md:hidden z-[100] pt-9">
                        <input 
                            type="checkbox"
                            className={`${styles.checkbox} hidden z-[100]`}
                            id="checkbox"
                            checked={isChecked}
                            onChange={toggle}
                        />
                        <label htmlFor="checkbox" className={styles.toggle}>
                            <div className={`${styles.bars} ${styles.bar1}`}></div>
                            <div className={`${styles.bars} ${styles.bar2}`}></div>
                            <div className={`${styles.bars} ${styles.bar3}`}></div>
                        </label>
                        </div>
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
                <div className={`${isChecked ? 'flex flex-col z-40' : 'hidden'} bg-[#F6EDE7] ${styles.navAnimation} fixed p-6 pt-32 inset-0 transition-all ease-in-out gap-4`} role="dialog" aria-modal="true">
                {
                    navigation.map((item, idx) => (
                        <li className="text-gray-500 hover:text-[#7bc7c1] list-none text-xl" key={idx}>
                            <a href={item.path}>{item.title}</a>
                        </li>
                    ))
                }
                </div>
            </header>
        </>
    )
}