import { useEffect, useState } from "react"
import axios from "axios"
//icons
import heart from "/src/image/heart.svg"
import tag from "/src/image/tag.svg"
import { FaX } from "react-icons/fa6"
import { BiSolidVolumeMute } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"

export const Storys = ({ showStorys, setShowStorys, storyId, setStoryId }) => {
  const [currentStoryData, setCurrentStoryData] = useState([])
  const [prevStoryData, setPrevStoryData] = useState([])
  const [nextStoryData, setNextStoryData] = useState([])

  const [degree, setDegree] = useState(0)
  console.log(degree)

  const getStorys = (id) => {
    axios.get("http://localhost:8000/story/" + id).then((res) => setCurrentStoryData(res.data))
  }
  const getPrevStorys = (id) => {
    axios.get("http://localhost:8000/story/" + id).then((res) => setPrevStoryData(res.data))
  }
  const getNextStorys = (id) => {
    axios.get("http://localhost:8000/story/" + id).then((res) => setNextStoryData(res.data))
  }
  useEffect(() => {
    getStorys(storyId)
    getPrevStorys(storyId - 1)
    getNextStorys(storyId + 1)
    const interval = setInterval(() => {
      setDegree(degree + 90)
    }, 3000)
    return () => clearInterval(interval)
  }, [storyId, degree])
  return (
    <div className="w-full h-full bg-zinc-800 fixed z-50 flex perspective justify-center items-center">
      <div
        // onClick={() => setDegree(degree + 90)}
        style={{ transform: ` rotateY(${-degree}deg)` }}
        className="w-[28rem] h-full transform-style-3d transition-all duration-500 "
      >
        <Story position="front" showStorys={showStorys} setShowStorys={setShowStorys} storyData={currentStoryData} degree={degree} setDegree={setDegree} />
        <Story position="left" showStorys={showStorys} setShowStorys={setShowStorys} storyData={prevStoryData} degree={degree} setDegree={setDegree} />
        <Story position="right" showStorys={showStorys} setShowStorys={setShowStorys} storyData={nextStoryData} degree={degree} setDegree={setDegree} />
      </div>
    </div>
  )
}

const Story = ({ showStorys, setShowStorys, storyData, position, degree, setDegree }) => {
  return (
    <>
      {/*限時動態容器*/}
      <div className={`${position} bg-black absolute w-full h-full flex justify-center items-center`}>
        <div onClick={() => setDegree(degree - 90)} className="w-1/2 h-full fixed left-0 z-10"></div>
        <div onClick={() => setDegree(degree + 90)} className="w-1/2 h-full fixed right-0 z-10"></div>
        {/*右上按鈕欄位*/}
        <div className="absolute top-5 right-2 text-white text-base flex z-50">
          <button className="mr-3">
            <BsThreeDots />
          </button>
          <button className="mr-3">
            <BiSolidVolumeMute />
          </button>
          <button onClick={() => setShowStorys(!showStorys)}>
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
            <input type="text" placeholder="    發送訊息" className="ml-3 bg-transparent placeholder:text-sm outline-none caret-white text-white" />
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
