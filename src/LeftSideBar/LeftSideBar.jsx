import { useState } from "react"

import Build from "./buttonComponents/build"
import { More } from "./buttonComponents/More"
import { Search } from "./buttonComponents/Search"
import { LeftSideBarData } from "./lib/LeftSideBarData"

import { FaInstagram } from "react-icons/fa"
import { Notify } from "./buttonComponents/Notify"

import instagram from "/src/image/instagram.svg"
// import igLogo from "/src/image/igLogo.svg"

export const LeftSideBar = () => {
  const [currentId, setcurrentId] = useState(-1)

  const [showMask, setShowMask] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showNotify, setShowNotify] = useState(false)

  const [showMore, setShowMore] = useState(false)

  const handleButtonClick = (item) => {
    if (item !== item) {
      setShowMore(!showMore)
      setShowMask(!showMask)
      setShowSearch(!showSearch)
      setShowNotify(!showNotify)
    }
    if (item === "建立") {
      setShowMask(!showMask)
      return
    }
    if (item === "更多") {
      setShowMore(!showMore)

      return
    }
    if (item === "搜尋") {
      setShowSearch(!showSearch)
      setShowNotify(false)
      return
    }
    if (item === "探索") {
      alert("功能尚未啟用")
      return
    }
    if (item === "連續短片") {
      alert("功能尚未啟用")
      return
    }
    if (item === "訊息") {
      alert("功能尚未啟用")
      return
    }
    if (item === "通知") {
      setShowNotify(!showNotify)
      setShowSearch(false)
      return
    }
    if (item === "個人檔案") {
      alert("功能尚未啟用")
      return
    }
    if (item === "Threads") {
      alert("功能尚未啟用")
      return
    }
  }

  return (
    <>
      {showMask && <Build showMask={showMask} setShowMask={setShowMask} />}
      {showMore && <More />}

      {/*左側欄選單*/}
      <div
        className={`${
          showSearch || showNotify ? "w-16 xl:w-16" : "w-16 xl:w-48 border-r"
        } h-full fixed z-40 left-0 border-r-zinc-800 flex-col justify-center transition-all ease-out duration-500`}
      >
        <Search showSearch={showSearch} setShowSearch={setShowSearch} />
        <Notify showNotify={showNotify} />
        {/*IG字母與LOGO*/}
        <div className="w-11/12 h-1/6 text-white relative m-auto">
          <div className="w-full h-full py-5 px-3 relative flex justify-center items-center">
            <a
              href=""
              className={`${
                showSearch || showNotify ? "w-0 opacity-0" : "w-0 opacity-0 xl:opacity-100 lg:w-full lg:h-full"
              } overflow-hidden transition-all flex items-center ease-out duration-100`}
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href=""
              className={`${
                showSearch || showNotify ? "w-full h-full" : "xl:w-0 xl:h-0"
              } flex justify-center items-center transition-all ease-out duration-100 absolute`}
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
        {/*側欄各按鈕渲染*/}
        <nav className="w-11/12 h-3/4 m-auto flex justify-center">
          <ul className="flex-col w-10/12 text-sm">
            {LeftSideBarData.map((item) => (
              <li
                onMouseEnter={() => setcurrentId(item.id)}
                onMouseLeave={() => setcurrentId(-1)}
                key={item.id}
                className={`${
                  item.child && "mt-10" //從"Threads"隔開一段距離
                } flex w-full text-white h-1/12 border-0 rounded-lg mb-5 hover:bg-zinc-900 transition-all ease-out duration-300`}
              >
                <button
                  onClick={() => handleButtonClick(item.name)}
                  className={`${showSearch || showNotify ? "" : "xl:justify-normal"} w-full h-full flex justify-center`}
                >
                  <div className={`${currentId === item.id && "scale-105"} flex items-center h-6 justify-center text-xl`}>{item.icon}</div>
                  <div className={`${showSearch || showNotify ? "hidden" : "hidden xl:block"} ml-3`}>
                    <span className="text-md h-6 flex items-center justify-center">{item.name}</span>
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
