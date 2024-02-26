import { useState, useEffect } from "react"
import axios from "axios"

//貼文的四個按鈕圖示資料
import { PostIcon } from "../LeftSideBar/lib/PostIcon"

//icon
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import Gangar from "/src/image/story/f.png"

export const Posts = ({ setpostId, openEachPost }) => {
  //全部貼文資料
  const [posts, setPosts] = useState([])

  //所有留言資料
  const [allComments, setAllComments] = useState([])

  //貼文內容 "更多" 按鈕開關
  const [showPostsContent, setShowPostsContent] = useState("")

  //檢查每則貼文的留言數
  const checkComment = (post) => {
    const eachPostComments = []
    allComments.map((comment) => {
      if (comment.commentId === post.id) {
        eachPostComments.push(comment)
      }
    })
    return eachPostComments.length
  }

  //取得所有貼文
  const getPosts = () => {
    axios.get("http://localhost:8000/posts").then((res) => {
      setPosts(res.data)
    })
  }

  //取得所有留言
  const getComment = () => {
    axios.get(`http://localhost:8000/comments`).then((res) => {
      setAllComments(res.data)
    })
  }

  //新增留言
  const addComment = (item, newComment) => {
    axios
      .post("http://localhost:8000/comments", { commentId: item.id, account: "ffff", avatar: Gangar, date: "剛剛", content: newComment })
      .then(() => getComment())
  }

  useEffect(() => {
    getPosts(), getComment()
  }, [])

  return (
    <>
      <div className="relative w-3/4 md:w-[28rem]">
        {/*每則貼文的容器*/}
        {posts.map((post) => (
          <div key={post.id} className="relative w-full flex flex-col mb-10">
            {/*頭像,帳號區塊*/}
            <div className="w-full h-12 flex items-center relative">
              <div className="border-0 m-1 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full w-10 h-10 flex justify-center items-center">
                <div className="border-0 bg-black rounded-full w-[2.2rem] h-[2.2rem] flex justify-center items-center">
                  <div className="m-0.5 border-0 rounded-full bg-zinc-900">
                    <img src={post.avatar} alt="avatar" />
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <span className="text-white text-sm font-bold">{post.account}</span>
              </div>
              <div className="text-white absolute right-1">
                <HiOutlineDotsHorizontal />
              </div>
            </div>
            {/*照片區塊*/}
            <div className="w-full border rounded-md border-zinc-700">
              <img src={post.photo} alt="" className="w-full h-[24rem] border-0 rounded-sm aspect-auto object-contain" />
            </div>

            {/*按讚、留言等..按鈕區塊(按下"留言圖示按鈕"則彈出當則貼文所有內容)*/}
            <div className="relative w-full h-10 flex items-center">
              {PostIcon.map((item) => (
                <button
                  onClick={() => {
                    item.id === 2 && openEachPost(), setpostId(post.id)
                  }}
                  key={item.id}
                  className={`${item.id === 4 ? "absolute right-0 bottom-2" : "mr-4"} w-5 h-5`}
                >
                  <img src={item.src} alt="" />
                </button>
              ))}
            </div>

            {/*內文、留言區塊*/}
            <div className="w-full text-white">
              {/*讚數區塊*/}
              <div className="mb-1">
                <span className="font-bold text-m">6個讚</span>
              </div>

              {/*帳號、內文區塊(按下"更多"按鈕則展示出所有內文內容,如果內文內容少於10個字則不顯示"更多")*/}
              <div className="text-md flex">
                <span className="font-bold">{post.account}</span>
                <div className={`${showPostsContent === post.id ? "w-full" : "w-32 truncate"} ml-2`}>
                  <span>{post.content}</span>
                </div>
                <div className="text-zinc-400">
                  <button
                    onClick={() => setShowPostsContent(post.id)}
                    className={`${showPostsContent === post.id || post.content.length < 10 ? "hidden" : "block"}`}
                  >
                    更多
                  </button>
                </div>
              </div>

              {/*查看留言數區塊(按下"查看全部XX則留言"則彈出當則貼文所有內容,如果留言數為0則不顯示"查看全部XX則留言")*/}
              <div className={`${checkComment(post) === 0 ? "hidden" : "block"}`}>
                <button
                  onClick={() => {
                    openEachPost(), setpostId(post.id)
                  }}
                  className="text-zinc-400 text-md"
                >
                  查看全部
                  {checkComment(post)}
                  則留言
                </button>
              </div>

              {/*留言輸入區塊(如果沒輸入任何文字則無法送出留言)*/}
              <CommentForm post={post} addComment={addComment} />
            </div>
            <div className="w-full h-10 border-y border-y-zinc-700 mt-5"></div>
          </div>
        ))}
      </div>
    </>
  )
}

const CommentForm = ({ post, addComment }) => {
  //新增貼文留言輸入字串
  const [newComment, setNewComment] = useState("")
  console.log(newComment)
  const handleSubmit = () => {
    newComment.length > 0 && addComment(post, newComment), setNewComment("")
  }

  return (
    <div>
      {/* TODO: 把 form變成一個獨立的 component，把 input狀態放進去 */}
      <form onSubmit={() => handleSubmit()} id={post.id}>
        <input
          id="input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          type="text"
          placeholder="留言....."
          className="w-full bg-black outline-none placeholder:text-zinc-400 placeholder:text-md"
        />
      </form>
    </div>
  )
}
