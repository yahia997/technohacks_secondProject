import Nav from "./components/Nav"
import Starter from "./components/Starter"
import AfterIntro from "./components/AfterIntro"
import StayProductive from "./components/StayProductive"
import Boxes from "./components/Boxes"

export default function Home() {
  return (
    <main>
      <Nav/>
      <Starter/>
      <AfterIntro/>
      <StayProductive/>
      <Boxes/>
    </main>
  )
}
