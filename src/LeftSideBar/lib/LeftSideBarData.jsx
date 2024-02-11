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

export const LeftSideBarData = [
  { id: 1, name: "首頁", icon: <GoHomeFill /> },
  { id: 2, name: "搜尋", icon: <PiMagnifyingGlassBold /> },
  { id: 3, name: "探索", icon: <FaRegCompass /> },
  { id: 4, name: "連續短片", icon: <BiMoviePlay /> },
  { id: 5, name: "訊息", icon: <PiMessengerLogoBold /> },
  { id: 6, name: "通知", icon: <FaRegHeart /> },
  { id: 7, name: "建立", icon: <FiPlusSquare /> },
  { id: 8, name: "個人檔案", icon: <FaRegUser /> },
  { id: 9, name: "Threads", icon: <FaThreads />, child: [1, 2] },
  { id: 10, name: "更多", icon: <FaBars /> },
]
