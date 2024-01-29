import { LeftSideBar } from "./LeftSideBar/LeftSideBar"
import { Posts } from "./Posts/Posts"
import { RightSideContent } from "./RightSideContent/RightSideContent"
import { Slick } from "./SlideBar/Slick"
// import { SlideBar } from "./SlideBar/SlideBar"
import "./styles.css"

export default function App() {
  return (
    <div className="bg-white dark:bg-black w-svw h-svw flex relative">
      <div className="w-1/6">
        <LeftSideBar />
      </div>

      <div className="w-[36rem] h-full border flex flex-wrap justify-center relative m-2">
        {/* <SlideBar /> */}
        <Slick />
        <Posts />
      </div>

      <RightSideContent />
    </div>
  )
}
