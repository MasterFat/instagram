import { useEffect, useState } from "react"
import axios from "axios"

//貼文的四個按鈕圖示資料
import { PostIcon } from "../LeftSideBar/lib/PostIcon"

//icons
import Gangar from "/src/image/story/f.png"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { FaRegHeart } from "react-icons/fa6"
import { FiSmile } from "react-icons/fi"
import { FaX } from "react-icons/fa6"

export const EachPost = ({ postId, close }) => {
  //當則貼文資料
  const [postData, setPostData] = useState([])

  //留言資料
  const [commentsData, setCommentsData] = useState([])

  //取得當則貼文
  const getPost = (postId) => {
    axios.get("http://localhost:8000/posts/" + postId).then((res) => setPostData(res.data))
  }

  //取得當則貼文留言
  const getComment = (postId) => {
    axios.get("http://localhost:8000/comments?commentId=" + postId).then((res) => setCommentsData(res.data))
  }

  //新增留言
  const addComment = (item, newComment) => {
    axios
      .post("http://localhost:8000/comments", { commentId: item.id, account: "ffff", avatar: Gangar, date: "剛剛", content: newComment })
      .then(() => getComment(postId))
  }

  useEffect(() => {
    getPost(postId), getComment(postId)
  }, [postId])

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          close()
          // TODO: 這裡只需要 setShowPosts(false)，這個 component 不需要 showPosts
          // TODO: 不要把 setShowPosts 傳給這個 component，在父層先設計一個 close 的 function 再當作 props 傳入使用
        }
      }}
      className="w-full h-full bg-[#00000090] fixed z-50 flex justify-center items-center"
    >
      {/*右上X按鈕*/}
      <div className="absolute text-white right-2 top-2">
        <button onClick={() => close()}>
          <FaX />
        </button>
      </div>

      {/*貼文容器*/}
      <div className="w-9/12 h-5/6 bg-black flex border border-zinc-900">
        {/*左側照片區塊*/}
        <div className="w-1/2 h-full">
          <img src={postData.photo} alt="photo" className="w-full h-full aspect-auto object-contain" />
        </div>

        {/*右側帳號、內文、留言等區塊*/}
        <div className="w-1/2 h-full flex flex-wrap border border-zinc-900">
          {/*右側頂部帳號*/}
          <div className="w-full h-12 border-b border-zinc-800 flex items-center relative">
            <Avatar data={postData} />
            <div className="ml-2">
              <span className="text-white text-md font-bold">{postData.account}</span>
            </div>
            <div className="text-white absolute right-1">
              <HiOutlineDotsHorizontal />
            </div>
          </div>

          {/*內文*/}
          <div className="w-full h-4/6 border-b border-zinc-900 flex flex-wrap scroll overflow-y-scroll">
            <div className="w-full flex flex-col">
              <div className="w-full flex">
                <Avatar data={postData} />
                <div className="w-[22rem] mt-2 text-white ml-2">
                  <span className="text-md font-bold mr-2">{postData.account}</span>
                  <span className="text-sm break-all">{postData.content}</span>
                </div>
              </div>

              {/*留言(沒有讚數就不顯示"X個讚")*/}
              {commentsData.map((comment) => (
                <div key={comment.id} className="w-full flex items-center relative">
                  <Avatar data={comment} />
                  <div className="w-[22rem] text-white flex flex-wrap ml-2">
                    <div className="w-full">
                      <span className="text-md font-bold mr-2">{comment.account}</span>
                      <span className="text-sm break-all">{comment.content}</span>
                    </div>
                    <div className="w-full text-xs text-zinc-400 font-bold">
                      <span className="mr-2">{comment.date}</span>
                      <span className={`${!comment.like ? "hidden" : ""} mr-2`}>{comment.like}個讚</span>
                      <span>回覆</span>
                    </div>
                  </div>
                  <div className="text-white text-xs absolute right-0">
                    <button className="hover:text-zinc-400">
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*讚、留言按鈕區塊*/}
          <div className="relative w-full flex flex-wrap border-b border-zinc-900">
            <div className="w-full flex items-center">
              {PostIcon.map((item) => (
                <button key={item.id} className={`${item.id === 4 ? "absolute right-0" : "ml-3"} w-5 my-2 `}>
                  <img src={item.src} alt="" />
                </button>
              ))}
            </div>
            <div className="w-full text-white text-sm font-bold mb-1">
              <span className="ml-3">6個讚</span>
            </div>
          </div>

          {/*留言輸入框(如果沒輸入任何文字則無法送出留言)*/}
          <div className="w-full flex h-10">
            <div className="w-full flex items-center text-white">
              <FiSmile className="ml-2" />

              <CommentForm postData={postData} addComment={addComment} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//頭像
const Avatar = ({ data }) => {
  return (
    <div className="border-0 m-1 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full w-10 h-10 flex justify-center items-center">
      <div className="border-0 bg-black rounded-full w-[2.2rem] h-[2.2rem] flex justify-center items-center">
        <div className="m-0.5 border-0 rounded-full bg-zinc-900">
          <img src={data.avatar} alt="photo" />
        </div>
      </div>
    </div>
  )
}

const CommentForm = ({ postData, addComment }) => {
  //新增貼文留言輸入字串
  const [newComment, setNewComment] = useState("")

  const handleSubmit = () => {
    newComment.length > 0 && addComment(postData, newComment), setNewComment("")
  }
  return (
    <>
      <form onSubmit={() => handleSubmit()} id={postData.id} name="form" className="w-10/12">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          type="text"
          placeholder="留言....."
          className="w-8/12 ml-2 bg-black outline-none placeholder:text-zinc-400 placeholder:text-sm"
        />
      </form>
      <div onClick={() => handleSubmit()} className="w-1/6 flex justify-center">
        <span className={`${newComment.length > 0 ? "text-sky-500 cursor-pointer hover:text-white" : "text-slate-500"} font-bold text-md `}>發佈</span>
      </div>
    </>
  )
}
