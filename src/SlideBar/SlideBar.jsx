import axios from "axios"
import { useEffect, useState } from "react"

import { FaArrowCircleRight } from "react-icons/fa"
import { FaArrowCircleLeft } from "react-icons/fa"
export const SlideBar = () => {
  const [story, setStory] = useState([])
  const [move, setMove] = useState(0)

  console.log(`-translate-x-[${move}rem]`)
  const getStory = () => {
    axios.get("http://localhost:8000/story").then((res) => setStory(res.data))
  }

  useEffect(() => getStory(), [])

  return (
    <div className="w-full border h-16 my-2 relative overflow-hidden">
      <div className={`-translate-x-[${move}rem] w-full h-16 relative flex justify-between transition-all ease-out duration-500`}>
        {story.map((item) => (
          <div key={item.id} className={` w-16 h-full mx-2 flex flex-col justify-center`}>
            <div className="w-12 h-3/4 border-0 rounded-full bg-zinc-900">
              <img src={item.img} alt="" />
            </div>
            <div className="w-full h-1/4 flex justify-center items-center">
              <span className="text-white text-xs text-center truncate w-8">{item.account}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-6 left-0 text-white flex">
        <button onClick={() => setMove(move - 30)}>
          <FaArrowCircleLeft />
        </button>
      </div>
      <div className="absolute top-6 right-0 text-white flex">
        <button onClick={() => setMove(move + 30)}>
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  )
}
