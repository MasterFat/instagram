import { useEffect, useState } from "react"
import axios from "axios"
//icons
import heart from "/src/image/heart.svg"
import tag from "/src/image/tag.svg"
import { FaX } from "react-icons/fa6"
import { BiSolidVolumeMute } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"

//展示限時動態頁面
export const Stories = ({ close, storyId, setStoryId, spin, setSpin }) => {
  //單個限時動態資料
  const [currentStoryData, setCurrentStoryData] = useState([])
  //設定立方體轉動角度
  const [degree, setDegree] = useState(0)

  const [progressBar, setProgressBar] = useState(true)

  const getStorys = (id) => {
    axios.get("http://localhost:8000/story/" + id).then((res) => setCurrentStoryData(res.data))
  }

  spin &&
    setTimeout(() => {
      setDegree(degree + 90)
      setStoryId(storyId + 1)
      setSpin(!spin)
      setProgressBar(false)
    }, 3000)

  useEffect(() => {
    getStorys(storyId)
    if (storyId < 1 || storyId > 16) {
      close()
    }
  }, [storyId, setStoryId, degree, close])

  //限時動態遮罩背景+轉動立方體
  return (
    <div className="w-full h-full bg-zinc-800 fixed z-50 flex perspective justify-center items-center">
      <div
        onTransitionEnd={() => {
          setProgressBar(true)
          setTimeout(() => {
            setDegree(degree + 90), setStoryId(storyId + 1), setProgressBar(false)
          }, 3000)
        }}
        style={{ transform: `rotateY(${-degree}deg)` }}
        className="w-[28rem] h-full transform-style-3d transition-all duration-300"
      >
        <Story
          position="front"
          storyId={storyId}
          setStoryId={setStoryId}
          close={close}
          storyData={currentStoryData}
          degree={degree}
          setDegree={setDegree}
          transitionEnd={progressBar}
        />
        <Story
          position="left"
          storyId={storyId}
          setStoryId={setStoryId}
          close={close}
          storyData={currentStoryData}
          degree={degree}
          setDegree={setDegree}
          transitionEnd={progressBar}
        />
        <Story
          position="right"
          storyId={storyId}
          setStoryId={setStoryId}
          close={close}
          storyData={currentStoryData}
          degree={degree}
          setDegree={setDegree}
          transitionEnd={progressBar}
        />
        <Story
          position="back"
          storyId={storyId}
          setStoryId={setStoryId}
          close={close}
          storyData={currentStoryData}
          degree={degree}
          setDegree={setDegree}
          transitionEnd={progressBar}
        />
      </div>
    </div>
  )
}

//立方體的每一面
const Story = ({ close, storyData, position, degree, setDegree, storyId, setStoryId, transitionEnd }) => {
  return (
    <>
      {/*限時動態容器*/}
      <div className={`${position} bg-black absolute w-full h-full flex justify-center items-center`}>
        {/*左右透明遮罩,點擊轉動前一則或下一則限動*/}
        {/*左*/}
        <div
          onClick={() => {
            setDegree(degree - 90), setStoryId(storyId - 1)
          }}
          className="w-1/2 h-full fixed left-0 z-10"
        ></div>
        {/*右*/}
        <div
          onClick={() => {
            setDegree(degree + 90), setStoryId(storyId + 1)
          }}
          className="w-1/2 h-full fixed right-0 z-10"
        ></div>

        {/*上方進度條*/}
        <div className="w-[27rem] h-[0.2rem] absolute top-1 bg-slate-300/50 border-0 rounded-md overflow-hidden">
          {/* <div className={`forwards w-full h-full bg-white`}></div> */}
          <div className={`${transitionEnd ? "forwards" : "w-0"} h-full bg-white`}></div>
        </div>

        {/*右上按鈕欄位*/}
        <div className="absolute top-5 right-2 text-white text-base flex z-50">
          <button className="mr-3">
            <BsThreeDots />
          </button>
          <button className="mr-3">
            <BiSolidVolumeMute />
          </button>
          <button onClick={() => close()}>
            <FaX />
          </button>
        </div>

        {/*左上頭像、帳號欄位*/}
        <div className="text-white absolute flex items-center top-3 left-2 z-50 text-sm font-bold">
          <div className="w-7 h-7 border-0 rounded-full bg-zinc-900 mr-2">
            <img src={storyData.avatar} alt="avatar" />
          </div>
          <span>{storyData.account}</span>
        </div>

        {/*照片*/}
        <img src={storyData.photos} alt="storyPhoto" className="w-full h-full aspect-auto object-contain" />
        <div className="w-full absolute bottom-5 flex items-center justify-evenly">
          <div className="w-[22rem] h-7 border rounded-xl flex items-center">
            <input id="input" type="text" placeholder="    發送訊息" className="ml-3 bg-transparent placeholder:text-sm outline-none caret-white text-white" />
          </div>
          <button>
            <img src={heart} alt="" />
          </button>
          <button>
            <img src={tag} alt="" />
          </button>
        </div>
      </div>
    </>
  )
}
