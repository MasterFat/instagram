import instagram from "/src/image/instagram.svg"
import { FaRegHeart } from "react-icons/fa6"
import { LeftSideBarData } from "./lib/LeftSideBarData"

export const MobileSidebar = ({ handleButtonClick }) => {
  return (
    <>
      <div className="w-full h-12 bg-black fixed z-40 top-0 flex justify-center text-white border-b border-zinc-800 md:hidden">
        <div className="w-11/12 h-full flex justify-between items-center">
          <img src={instagram} alt="instagram" />
          <input type="text" placeholder="   搜尋" className="w-1/2 h-8 bg-zinc-800 outline-none border-0 rounded-md" />
          <FaRegHeart />
        </div>
      </div>
      <div className="w-full h-12 bg-black fixed z-40 bottom-0 flex justify-center items-center text-white border-t border-zinc-800  md:hidden">
        <div className="w-10/12 flex justify-between text-xl">
          {LeftSideBarData.map((item) => (
            <div
              key={item.id}
              className={`${item.name === "搜尋" || item.name === "通知" || item.name === "Threads" || item.name === "更多" ? "hidden" : "block"}`}
            >
              <button onClick={() => handleButtonClick(item.name)}>{item.icon}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
