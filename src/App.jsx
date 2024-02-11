import { useState } from "react"

import { LeftSideBar } from "./LeftSideBar/LeftSideBar"

//彈出的每則貼文component
import { EachPost } from "./Posts/EachPost"

import { Posts } from "./Posts/Posts"
import { RightSideContent } from "./RightSideContent/RightSideContent"
import { Slick } from "./SlideBar/Slick"
import "./styles.css"
import { Storys } from "./SlideBar/Storys"

export default function App() {
  //新增留言輸入字串
  const [newComment, setNewComment] = useState("")
  //彈出各貼文內容開關
  const [showPosts, setShowPosts] = useState(false)
  //設定按下 "查看所有留言" 或 "留言圖按鈕" 的當則貼文ID
  const [postId, setpostId] = useState("")
  //彈出各貼文內容開關
  const [showStorys, setShowStorys] = useState(false)
  //設定按下的限動ID
  const [storyId, setStoryId] = useState("")

  return (
    <div className="w-full h-full flex justify-items-center relative">
      {/* <Test /> */}
      <LeftSideBar />
      {showStorys && <Storys showStorys={showStorys} setShowStorys={setShowStorys} storyId={storyId} setStoryId={setStoryId} />}
      {showPosts && <EachPost postId={postId} showPosts={showPosts} setShowPosts={setShowPosts} newComment={newComment} setNewComment={setNewComment} />}
      <div className="w-full h-full flex flex-wrap justify-center relative mt-12 md:mt-0 md:ml-16 xl:ml-48">
        <div className="w-full md:w-[36rem] h-full flex flex-wrap justify-center">
          <Slick showStorys={showStorys} setShowStorys={setShowStorys} setStoryId={setStoryId} />
          <Posts setpostId={setpostId} showPosts={showPosts} setShowPosts={setShowPosts} newComment={newComment} setNewComment={setNewComment} />
        </div>

        <RightSideContent />
      </div>
    </div>
  )
}
