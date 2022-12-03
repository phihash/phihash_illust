import Header from "../components/header"
import Hero from "../components/hero"
import Work from "../components/work"
import Character from "../components/character"
import About from "../components/about"
import Contact from "../components/contact"
import Movie from "../components/movie"
import Manga from "../components/manga"
import Footer from "../components/footer"


export default function Home(){
  return (
    <>
      <Header></Header>
      <Hero></Hero>

      <main>
      <Character></Character>
        <Work></Work>
        <Manga></Manga>

        <Movie></Movie>

        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  )
}


