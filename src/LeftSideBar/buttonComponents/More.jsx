//icons
import { IoIosSettings } from "react-icons/io"
import { TbPhoto } from "react-icons/tb"
import { LiaBookmark } from "react-icons/lia"
import { GoMoon } from "react-icons/go"
import { BiMessageAltError } from "react-icons/bi"

//"更多"選單內容資料陣列
const moreList = [
  { id: 1, name: "設定", icon: <IoIosSettings /> },
  { id: 2, name: "你的動態", icon: <TbPhoto /> },
  { id: 3, name: "我的珍藏", icon: <LiaBookmark /> },
  { id: 4, name: "切換外觀", icon: <GoMoon /> },
  { id: 5, name: "回報問題", icon: <BiMessageAltError /> },
]

//"更多" 按鈕
export const More = () => {
  return (
    <div className="w-[13rem] h-[21rem] bg-zinc-800 fixed z-50 bottom-16 left-2 flex-col text-white text-sm border-0 rounded-xl">
      <div className="w-full h-4/6 flex justify-center">
        <nav className="w-11/12 h-[13rem] m-auto">
          <ul className="w-full h-full">
            {moreList.map((item) => (
              <li key={item.id} className="w-full h-1/5">
                <button className="flex w-full h-full hover:bg-zinc-700 items-center border-0 rounded-md transition-all ease-out">
                  <div className="h-full flex items-center mr-2 ml-2 text-base">{item.icon}</div>
                  <div className="h-full flex items-center">
                    <span className="text-sm">{item.name}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="w-full h-1/6 border-t-4 border-zinc-700 border-b flex justify-center items-center ">
        <button className="flex w-11/12 h-8 hover:bg-zinc-700 items-center border-0 rounded-md transition-all ease-out">
          <span className="ml-2">切換帳號</span>
        </button>
      </div>
      <div className="w-full h-1/6 flex justify-center items-center">
        <button className="flex w-11/12 h-8 hover:bg-zinc-700 items-center border-0 rounded-md transition-all ease-out">
          <span className="ml-2">登出</span>
        </button>
      </div>
    </div>
  )
}
