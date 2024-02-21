import { useState } from "react"
import "./styles.css"

//components
import { EachPost } from "./Posts/EachPost"
import { LeftSideBar } from "./LeftSideBar/LeftSideBar"
import { Posts } from "./Posts/Posts"
import { RightSideContent } from "./RightSideContent/RightSideContent"
import { Slick } from "./SlideBar/Slick"
import { Storys } from "./SlideBar/Storys"

export default function App() {
  //新增貼文留言輸入字串
  const [newComment, setNewComment] = useState("")

  //彈出每一則貼文頁面的開關
  const [showPosts, setShowPosts] = useState(false)

  //設定按下 "查看所有留言" 或 "留言圖按鈕" 的當則貼文ID
  const [postId, setpostId] = useState("")

  //彈出限動頁面開關
  const [showStorys, setShowStorys] = useState(false)

  //設定按下的限動ID
  const [storyId, setStoryId] = useState("")

  const [spin, setSpin] = useState(false)

  return (
    <div className="w-full h-full flex justify-items-center relative">
      {/*左側選單(電腦版,當螢幕寬度>768時顯示)*/}
      <LeftSideBar />

      {/*限時動態頁面(按下上方"任一個限時動態"時才彈出)*/}
      {showStorys && <Storys showStorys={showStorys} setShowStorys={setShowStorys} storyId={storyId} setStoryId={setStoryId} spin={spin} setSpin={setSpin} />}

      {/*每則貼文頁面(按下"留言圖示"或"查看全部留言"才彈出)*/}
      {showPosts && <EachPost postId={postId} showPosts={showPosts} setShowPosts={setShowPosts} newComment={newComment} setNewComment={setNewComment} />}

      <div className="w-full h-full flex flex-wrap justify-center relative mt-12 md:mt-0 md:ml-16 xl:ml-48">
        <div className="w-full md:w-[36rem] h-full flex flex-wrap justify-center">
          {/*上方限時動態區塊*/}
          <Slick showStorys={showStorys} setShowStorys={setShowStorys} setStoryId={setStoryId} spin={spin} setSpin={setSpin} />

          {/*中間貼文區塊*/}
          <Posts setpostId={setpostId} showPosts={showPosts} setShowPosts={setShowPosts} newComment={newComment} setNewComment={setNewComment} />
        </div>

        {/*右側 "為您推薦" 內容*/}
        <RightSideContent />
      </div>
    </div>
  )
}
