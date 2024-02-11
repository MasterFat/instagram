import { FaPhotoFilm } from "react-icons/fa6"
import { FaX } from "react-icons/fa6"

export default function Build({ showMask, setShowMask }) {
  return (
    <div
      onClick={(e) => {
        console.log(e.currentTarget, e.target)
        if (e.target === e.currentTarget) {
          setShowMask(!showMask)
        }
      }}
      className="w-full h-full bg-[#00000090] fixed z-50 flex justify-center items-center"
    >
      <button onClick={() => setShowMask(!showMask)} className="absolute top-2 right-2">
        <FaX className="text-white" />
      </button>
      <div className="w-80 h-3/4 bg-zinc-800 border-0 rounded-lg flex-col justify-center items-center">
        <div className="w-full h-7 border-b border-b-zinc-700 flex justify-center items-center">
          <p className="text-white text-xs font-bold">建立新貼文</p>
        </div>
        <div className="flex-wrap justify-center mt-32">
          <FaPhotoFilm className="text-5xl w-full text-white" />
          <p className="text-white text-sm font-bold w-full flex justify-center mt-4">將相片和影片拖曳到這裡</p>
        </div>
        <div className="w-full flex justify-center mt-5">
          <button className="w-16 h-5 bg-sky-500 text-white text-xs font-bold border-0 rounded-md hover:bg-sky-600">從電腦選擇</button>
        </div>
      </div>
    </div>
  )
}
