import { useState } from "react"

//components
import Build from "./buttonComponents/build"
import { More } from "./buttonComponents/More"
import { Search } from "./buttonComponents/Search"
import { Notify } from "./buttonComponents/Notify"

//icons
import { FaInstagram } from "react-icons/fa"
import instagram from "/src/image/instagram.svg"

//LeftSideBar icons
import { FaRegCompass } from "react-icons/fa"
import { BiMoviePlay } from "react-icons/bi"
import { PiMessengerLogoBold } from "react-icons/pi"
import { FaRegHeart } from "react-icons/fa6"
import { FiPlusSquare } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa"
import { FaThreads } from "react-icons/fa6"
import { FaBars } from "react-icons/fa6"
import { GoHomeFill } from "react-icons/go"
import { PiMagnifyingGlassBold } from "react-icons/pi"

export const LeftSideBar = () => {
  //設定按下的按鈕id
  const [currentId, setcurrentId] = useState(-1) // TODO: 用css做

  //電腦版 左側欄選單 內容資料陣列
  const LeftSideBarData = [
    { id: 1, name: "首頁", icon: <GoHomeFill /> }, // 把click做在這裡
    { id: 2, name: "搜尋", icon: <PiMagnifyingGlassBold />, component: <Search currentId={currentId} /> },
    { id: 3, name: "探索", icon: <FaRegCompass /> },
    { id: 4, name: "連續短片", icon: <BiMoviePlay /> },
    { id: 5, name: "訊息", icon: <PiMessengerLogoBold /> },
    { id: 6, name: "通知", icon: <FaRegHeart />, component: <Notify currentId={currentId} /> },
    { id: 7, name: "建立", icon: <FiPlusSquare />, component: <Build setcurrentId={setcurrentId} /> },
    { id: 8, name: "個人檔案", icon: <FaRegUser /> },
    { id: 9, name: "Threads", icon: <FaThreads />, child: [1, 2] },
    { id: 10, name: "更多", icon: <FaBars />, component: <More /> },
  ]

  //判斷按下的按鈕是哪個
  const handleButtonClick = (item) => {
    setcurrentId(item.id)
    if (currentId === item.id) {
      setcurrentId(-1)
      return
    }
    if (!item.component) {
      alert("功能尚未啟用")
      return
    }
  }

  return (
    <>
      {/*顯示按下按鈕的內容*/}
      <div>{LeftSideBarData.map((item) => currentId === item.id && <div key={item.id}>{item.component}</div>)}</div>

      {/*手機板上下欄選單(當畫面寬度<768時顯示)*/}
      <MobileSidebar handleButtonClick={handleButtonClick} LeftSideBarData={LeftSideBarData} />

      {/*電腦版左側欄選單(當畫面寬度<1280時簡化，當畫面寬度<768時隱藏)*/}
      <div
        className={`${
          currentId === 2 || currentId === 6 ? "w-16 xl:w-16" : "w-16 xl:w-48 border-r"
        } hidden md:block h-full fixed z-40 left-0 border-r-zinc-800 flex-col justify-center transition-all ease-out duration-500`}
      >
        {/*IG字母與LOGO*/}
        <div className="w-11/12 h-1/6 text-white relative m-auto">
          <div className="w-full h-full py-5 px-3 relative flex justify-center items-center">
            <a
              href=""
              className={`${
                currentId === 2 || currentId === 6 ? "w-0 opacity-0" : "w-0 opacity-0 xl:opacity-100 lg:w-full lg:h-full"
              } overflow-hidden flex items-center transition-all ease-out duration-100`}
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href=""
              className={`${
                currentId === 2 || currentId === 6 ? "w-full h-full" : "xl:w-0 xl:h-0"
              } absolute flex justify-center items-center transition-all ease-out duration-100`}
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/*側欄各按鈕渲染*/}
        <nav className="w-11/12 h-3/4 m-auto flex justify-center">
          <ul className="flex-col w-11/12">
            {LeftSideBarData.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.child ? "mt-10" : "" //從"Threads"隔開一段距離
                } group flex w-full text-white h-1/12 border-0 rounded-lg py-1.5 my-1.5 hover:bg-zinc-900 transition-all ease-out duration-300`}
              >
                <button
                  onClick={() => handleButtonClick(item)}
                  className={`${currentId === 2 || currentId === 6 ? "" : "xl:justify-normal"} w-full h-full flex justify-center`}
                >
                  <div className={`group-hover:scale-105 flex items-center h-6 justify-center text-xl transition-all`}>{item.icon}</div>
                  <div className={`${currentId === 2 || currentId === 6 ? "hidden" : "hidden xl:block"} ml-3`}>
                    <span className="text-m w-20 h-6 flex items-center">{item.name}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

const MobileSidebar = ({ handleButtonClick, LeftSideBarData }) => {
  const iconsJudgment = (item) => {
    if (item.id === 2) {
      return true
    }
    if (item.id === 6) {
      return true
    }
    if (item.id === 9) {
      return true
    }
    if (item.id === 10) {
      return true
    }
  }
  return (
    <>
      <div className="w-full h-12 bg-black fixed z-40 top-0 flex justify-center text-white border-b border-zinc-800 md:hidden">
        <div className="w-11/12 h-full flex justify-between items-center">
          <img src={instagram} alt="instagram" />
          <input id="input2" type="text" placeholder="   搜尋" className="w-1/2 h-8 bg-zinc-800 outline-none border-0 rounded-md" />
          <FaRegHeart />
        </div>
      </div>
      <div className="w-full h-12 bg-black fixed z-40 bottom-0 flex justify-center items-center text-white border-t border-zinc-800  md:hidden">
        <div className="w-10/12 flex justify-between text-xl">
          {LeftSideBarData.map((item) => (
            <div key={item.id} className={`${iconsJudgment(item) ? "hidden" : "block"}`}>
              <button onClick={() => handleButtonClick(item)}>{item.icon}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
