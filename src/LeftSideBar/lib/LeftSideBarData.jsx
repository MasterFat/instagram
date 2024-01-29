import { CiSearch } from "react-icons/ci"
import { FaRegCompass } from "react-icons/fa"
import { BiMoviePlay } from "react-icons/bi"
import { PiMessengerLogoBold } from "react-icons/pi"
import { FaRegHeart } from "react-icons/fa6"
import { FiPlusSquare } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa"
import { FaThreads } from "react-icons/fa6"
import { FaBars } from "react-icons/fa6"
import { GoHomeFill } from "react-icons/go"

export const LeftSideBarData = [
  { id: 1, name: "首頁", icon: <GoHomeFill /> },
  { id: 2, name: "搜尋", icon: <CiSearch /> },
  { id: 3, name: "探索", icon: <FaRegCompass /> },
  { id: 4, name: "連續短片", icon: <BiMoviePlay /> },
  { id: 5, name: "訊息", icon: <PiMessengerLogoBold /> },
  { id: 6, name: "通知", icon: <FaRegHeart /> },
  { id: 7, name: "建立", icon: <FiPlusSquare /> },
  { id: 8, name: "個人檔案", icon: <FaRegUser /> },
  { id: 9, name: "Threads", icon: <FaThreads />, child: [1, 2] },
  { id: 10, name: "更多", icon: <FaBars /> },
]

// import build from "/src/image/build.svg"
// import compass from "/src/image/compass.svg"
// import film from "/src/image/film.svg"
// import glass from "/src/image/glass.svg"
// import house from "/src/image/house.svg"
// import messege from "/src/image/messege.svg"
// import more from "/src/image/more.svg"
// import notify from "/src/image/notify.svg"
// import threads from "/src/image/threads.svg"
// import igLogo from "/src/image/igLogo.svg"
