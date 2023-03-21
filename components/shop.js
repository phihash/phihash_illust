import Banner from '../public/images/banner.png'
import Link from 'next/link';

export default function Shop() {
  return (
  <section class="body-font">
    <div class="container  mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-4xl mb-12 font-medium">Shop</h1>
      </div>
      <div  class="w-5/6 object-cover object-center rounded">
      <a href="https://suzuri.jp/phihash" target="_blank" rel="noopenner noreferrer">
        <img  alt="hero" src={Banner.src} />
      </a>
      </div>
      {/* <img class="w-3/4 object-cover object-center rounded" alt="hero" src={Banner.src} /> */}
    </div>
  </section>
  );
}
