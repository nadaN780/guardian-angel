import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#7bc7c1]">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute start-4 top-4 sm:start-6 sm:top-6 lg:start-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-[#8a9998] p-2 text-white shadow transition hover:bg-[#57a49d] sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
        <div>
          <div className="flex justify-center lg:justify-start">
            
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-8">
          <li>
            <a href="https://www.facebook.com/profile.php?id=61553207705910&mibextid=ZbWKwL" target="_blank" className="hover:opacity-80">
                <Image src="/assets/facebook.svg" height={48} width={48} alt="facebook icon" />
            </a>
          </li>
          <li>
          <a href="https://instagram.com/guardianangel509?igshid=MWFhbWI0ZGNja3luag==" target="_blank" className="hover:opacity-80">
            <Image src="/assets/instagram.svg" height={48} width={48} alt="instagram icon" />
          </a>
          </li>
          <li>
          <a href="https://x.com/guardian_a_ngel?s=09" target="_blank" className="hover:opacity-80">
            <Image src="/assets/x.svg" height={48} width={48} alt="x icon" />
          </a>
          </li>
        </ul>
      </div>

      <p className=" -mb-10 text-center  to text-black ">
        Copyright © 2023 Guardian Angel . All rights reserved
      </p>
      </div>
    </footer>
  );
}
