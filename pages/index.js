import Header from "../components/header"
import Hero from "../components/hero"
import Work from "../components/work"
import Character from "../components/character"
import About from "../components/about"
import Contact from "../components/contact"
import Movie from "../components/movie"
import Manga from "../components/manga"
// import Hoge from "../components/hoge"
import Wallpaper from "../components/wallpaper"
import Footer from "../components/footer"


export default function Home(){
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <main>
      <Character></Character>
        <Work></Work>
        <Wallpaper></Wallpaper>
        <Manga></Manga>

        <Movie></Movie>

        <About></About>
        <Contact></Contact>
      </main>
      {/* <Hoge></Hoge> */}

      <Footer></Footer>
    </>
  )
}


