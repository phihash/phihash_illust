
export default function Movie() {
  return (
  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Movie</h1>
      </div>
    <iframe class="lg:w-4/6 lg:h-4/6 md:w-5/6 md:h-5/6 w-5/6 mb-4 object-cover object-center rounded"  src="https://www.youtube.com/embed/DGaRoCg4wjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{/* lg:w-4/6 md:w-5/6 w-5/6 */}
      {/* <div class="container px-5 py-24 mx-auto">
      </div> */}
    </div>
  </section>
  );
}
