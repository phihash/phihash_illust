
export default function Character({src,name,oneline,desc}) {
  return (
  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
      <img class="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded" alt="hero" src={src.src} />
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font text-3xl mb-5 font-bold">{name}</h1>
        <p class="leading-relaxed text-lg font-bold mb-6">{oneline}</p>
        <p class="leading-relaxed text-left font-bold">{desc}</p>
      </div>

    </div>

  </section>
  );
}
