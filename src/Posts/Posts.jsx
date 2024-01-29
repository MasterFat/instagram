import { useState, useEffect } from "react"
import axios from "axios"

import { HiOutlineDotsHorizontal } from "react-icons/hi"
import heart from "/src/image/heart.svg"
import messege from "/src/image/messege.svg"
import tag from "/src/image/tag.svg"
import flag from "/src/image/flag.svg"

const icon = [
  { id: 1, src: heart },
  { id: 2, src: messege },
  { id: 3, src: tag },
  { id: 4, src: flag },
]
const checkComment = (item) => {
  if (item.comment !== undefined) {
    return item.comment.length
  }
}

export const Posts = () => {
  const [posts, setPosts] = useState([])
  const [newComment, setNewComment] = useState("")

  const a = []
  a.push(newComment)

  const getPosts = () => {
    axios.get("http://localhost:8000/posts").then((res) => {
      setPosts(res.data)
    })
  }

  const addComment = (item) => {
    axios.patch("http://localhost:8000/posts/" + item.id, { comment: a }).then((res) => setPosts(res.data))
  }

  useEffect(() => getPosts(), [])

  return (
    <div className="relative w-4/5">
      {/*每則貼文的容器*/}
      {posts.map((item) => (
        <div key={item.id} className="relative w-full flex flex-col mb-10">
          {/*頭像,帳號區塊*/}
          <div className="w-full h-12 flex items-center relative">
            <div className="border-0 m-1 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full w-10 h-10 flex justify-center items-center">
              <div className="border-0 bg-black rounded-full w-[2.2rem] h-[2.2rem] flex justify-center items-center">
                <div className="m-0.5 border-0 rounded-full bg-zinc-900">
                  <img src={item.img} alt="" />
                </div>
              </div>
            </div>
            <div className="ml-2">
              <span className="text-white text-sm font-bold">{item.account}</span>
            </div>
            <div className="text-white absolute right-1">
              <HiOutlineDotsHorizontal />
            </div>
          </div>
          {/*照片區塊*/}
          <div className="w-full border rounded-md border-zinc-700">
            <img src={item.photo} alt="" className="w-full h-[28rem]  border-0 rounded-sm aspect-auto object-contain" />
          </div>
          {/*按讚、留言等..按鈕區塊*/}
          <div className="relative w-full h-10 flex items-center">
            {icon.map((item) => (
              <button key={item.id} className={`${item.id === 4 ? "absolute right-0 bottom-2" : "mr-4"} w-5 h-5`}>
                <img src={item.src} alt="" />
              </button>
            ))}
          </div>
          {/*內文、留言區塊*/}
          <div className="w-full text-white">
            {/*讚數區塊*/}
            <div>
              <span className="font-bold text-md">6個讚</span>
            </div>
            {/*帳號、內文區塊*/}
            <div className="text-md flex">
              <span className="font-bold ">{item.account}</span>
              <div className="ml-2 w-52 truncate">
                <span>{item.content}</span>
              </div>
              <div className="text-zinc-400">
                <button>更多</button>
              </div>
            </div>
            {/*查看留言數區塊*/}
            <div className="text-zinc-400 text-md">
              <span>查看全部{checkComment(item)}則留言</span>
            </div>
            {/*留言輸入區塊*/}
            <div>
              <form onSubmit={() => addComment(item)} action="">
                <input
                  onChange={(e) => setNewComment(e.target.value)}
                  type="text"
                  placeholder="留言....."
                  className="w-full bg-black outline-none placeholder:text-zinc-400 placeholder:text-md"
                />
              </form>
            </div>
          </div>
          <div className="w-full h-10 border-y border-y-zinc-700 mt-5"></div>
        </div>
      ))}
    </div>
  )
}
