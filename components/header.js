import React from "react";

export default function Header({ fixed }) {
  return (
   <header class="w-full text-sm pt-8 sm:pb-4">
   <nav class="max-w-[85rem] w-full mx-auto  px-6 sm:flex sm:justify-between" aria-label="Global">
      <a class="text-xl font-semibold flex justify-center" href="/">phihash illust</a>
      <div class="flex flex-row items-center gap-5 mt-6 sm:mt-0 sm:pl-5 justify-center">
        <a href="https://twitter.com/phihash">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24" aria-label="Twitter Link">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
        </a>
        <a href="https://www.instagram.com/phihash_illust/">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"  aria-label="Instagram Link">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      </div>
  </nav>
</header>

  );
}
