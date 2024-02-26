import { useState, useCallback } from "react"
import "./styles.css"

//components
import { EachPost } from "./Posts/EachPost"
import { LeftSideBar } from "./LeftSideBar/LeftSideBar"
import { Posts } from "./Posts/Posts"
import { RightSideContent } from "./RightSideContent/RightSideContent"
import { Slick } from "./SlideBar/Slick"
import { Stories } from "./SlideBar/Stories"

const useBoolean = (init) => {
  const [state, setState] = useState(init)

  const close = useCallback(() => {
    setState(false)
  }, [])

  const open = useCallback(() => {
    setState(true)
  }, [])

  const toggle = useCallback(() => {
    setState((state) => !state)
  }, [])

  return { state, open, close, toggle }
}

export default function App() {
  //設定按下 "查看所有留言" 或 "留言圖按鈕" 的當則貼文ID
  const [postId, setpostId] = useState("")

  //設定按下的限動ID
  const [storyId, setStoryId] = useState("")

  const [spin, setSpin] = useState(false)

  //限時動態頁面開關
  const storiesVisible = useBoolean(false)

  //當則貼文內容頁面開關
  const eachPostVisible = useBoolean(false)

  return (
    <div className="w-full h-full flex justify-items-center relative">
      {/*左側選單(電腦版,當螢幕寬度>768時顯示)*/}
      <LeftSideBar />

      {/*限時動態頁面(按下上方"任一個限時動態"時才彈出)*/}
      {storiesVisible.state && <Stories close={storiesVisible.close} storyId={storyId} setStoryId={setStoryId} spin={spin} setSpin={setSpin} />}

      {/*每則貼文頁面(按下"留言圖示"或"查看全部留言"才彈出)*/}
      {eachPostVisible.state && <EachPost close={eachPostVisible.close} postId={postId} />}

      <div className="w-full h-full flex flex-wrap justify-center relative mt-12 md:mt-0 md:ml-16 xl:ml-48">
        <div className="w-full md:w-[36rem] h-full flex flex-wrap justify-center">
          {/*上方限時動態區塊*/}
          <Slick openStories={storiesVisible.open} setStoryId={setStoryId} spin={spin} setSpin={setSpin} />

          {/*中間貼文區塊*/}
          <Posts openEachPost={eachPostVisible.open} setpostId={setpostId} />
        </div>

        {/*右側 "為您推薦" 內容*/}
        <RightSideContent />
      </div>
    </div>
  )
}
