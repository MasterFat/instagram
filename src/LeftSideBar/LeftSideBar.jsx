import { useState } from "react"

//components
import Build from "./buttonComponents/build"
import { More } from "./buttonComponents/More"
import { Search } from "./buttonComponents/Search"
import { MobileSidebar } from "./MobileSidebar"
//側欄按鈕靜態資料
import { LeftSideBarData } from "./lib/LeftSideBarData"

//icon
import { FaInstagram } from "react-icons/fa"
import { Notify } from "./buttonComponents/Notify"
import instagram from "/src/image/instagram.svg"

export const LeftSideBar = () => {
  //設定滑鼠移進移出每個按鈕的id
  const [currentId, setcurrentId] = useState(-1)
  //"建立"按鈕的開關
  const [showMask, setShowMask] = useState(false)
  //"搜尋"按鈕的開關
  const [showSearch, setShowSearch] = useState(false)
  //"通知"按鈕的開關
  const [showNotify, setShowNotify] = useState(false)
  //"更多"按鈕的開關
  const [showMore, setShowMore] = useState(false)

  //判斷按下的按鈕是哪個
  const handleButtonClick = (item) => {
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
      {/*跳出"建立"畫面*/}
      {showMask && <Build showMask={showMask} setShowMask={setShowMask} />}
      {/*彈出"更多"列表*/}
      {showMore && <More />}
      {/*滑出"搜尋"框*/}
      <Search showSearch={showSearch} setShowSearch={setShowSearch} />
      {/*滑出"通知"框*/}
      <Notify showNotify={showNotify} />
      {/*手機板上下欄選單(當畫面寬度<768時顯示)*/}
      <MobileSidebar handleButtonClick={handleButtonClick} />
      {/*電腦版左側欄選單(當畫面寬度<1280時簡化，當畫面寬度<768時隱藏)*/}
      <div
        className={`${
          showSearch || showNotify ? "w-16 xl:w-16" : "w-16 xl:w-48 border-r"
        } hidden md:block h-full fixed z-40 left-0 border-r-zinc-800 flex-col justify-center transition-all ease-out duration-500`}
      >
        {/*IG字母與LOGO*/}
        <div className="w-11/12 h-1/6 text-white relative m-auto">
          <div className="w-full h-full py-5 px-3 relative flex justify-center items-center">
            <a
              href=""
              className={`${
                showSearch || showNotify ? "w-0 opacity-0" : "w-0 opacity-0 xl:opacity-100 lg:w-full lg:h-full"
              } overflow-hidden transition-all flex items-center ease-out duration-100`}
            >
              <img src={instagram} alt="instagram" />
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
          <ul className="flex-col w-11/12">
            {LeftSideBarData.map((item) => (
              <li
                onMouseEnter={() => setcurrentId(item.id)}
                onMouseLeave={() => setcurrentId(-1)}
                key={item.id}
                className={`${
                  item.child && "mt-10" //從"Threads"隔開一段距離
                } flex w-full text-white h-1/12 border-0 rounded-lg py-1.5 my-1.5 hover:bg-zinc-900 transition-all ease-out duration-300`}
              >
                <button
                  onClick={() => handleButtonClick(item.name)}
                  className={`${showSearch || showNotify ? "" : "xl:justify-normal"} w-full h-full flex justify-center`}
                >
                  <div className={`${currentId === item.id && "scale-105"} flex items-center h-6 justify-center text-xl transition-all`}>{item.icon}</div>
                  <div className={`${showSearch || showNotify ? "hidden" : "hidden xl:block"} ml-3`}>
                    <span className="text-m h-6 flex items-center justify-center">{item.name}</span>
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
