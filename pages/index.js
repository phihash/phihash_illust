import Header from "../components/header"
import Work from "../components/work"
import About from "../components/about"
import Contact from "../components/contact"
import Sns from "../components/sns"
import Footer from "../components/footer"

export default function Home(){
  return (
    <>
      <Header></Header>
      <main>
        <Work></Work>
        <About></About>
        <Contact></Contact>
        <Sns></Sns>
      </main>
      <Footer></Footer>
    </>
  )
}


