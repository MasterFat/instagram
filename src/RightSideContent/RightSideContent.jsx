import Gangar from "/src/image/story/f.png"
import g from "/src/image/story/g.png"
import h from "/src/image/story/h.png"
import i from "/src/image/story/i.png"
import j from "/src/image/story/j.png"
import k from "/src/image/story/k.png"

const recommend = [
  { id: 1, src: g, account: "ggggg" },
  { id: 2, src: h, account: "h" },
  { id: 3, src: i, account: "iiiiiiiiiii" },
  { id: 4, src: j, account: "jjjjjjjjj" },
  { id: 5, src: k, account: "kkkkkkkkkkkk" },
]

export const RightSideContent = () => {
  return (
    <div className="relative w-[13rem] -right-2 top-5 ml-4">
      <div className="w-full relative flex">
        <div className="border-0 rounded-full w-10 h-10 bg-zinc-900">
          <img src={Gangar} alt="" />
        </div>
        <div className="flex flex-col text-white text-sm justify-center ml-3">
          <span className="font-bold">ffff</span>
          <span className="text-zinc-400">耿鬼</span>
        </div>
        <button className="text-sky-500 text-sm absolute top-3 right-0 hover:text-white">切換</button>
      </div>
      <div className="w-full h-5 flex justify-between items-center font-bold my-3">
        <span className="text-zinc-400 text-md">為你推薦</span>
        <button className="text-white text-sm hover:text-zinc-400">查看全部</button>
      </div>
      {recommend.map((item) => (
        <div key={item.id} className="w-full relative flex mb-3">
          <div className="border-0 rounded-full w-10 h-10 bg-zinc-900">
            <img src={item.src} alt="" />
          </div>
          <div className="flex flex-col text-white text-sm justify-center ml-3">
            <span className="font-bold">{item.account}</span>
            <span className="text-zinc-400">為你推薦</span>
          </div>
          <button className="text-sky-500 text-sm absolute top-3 right-0 hover:text-white">追蹤</button>
        </div>
      ))}
      <div className="w-full text-zinc-500 text-xs my-5">
        <span>關於.使用說明.新聞稿.API.工作機會.隱私.使用條款.地點.語言.Meta.驗證</span>
      </div>
      <div className="w-full text-zinc-500 text-xs">
        <span>© 2024INSTAGRAM FROM META</span>
      </div>
    </div>
  )
}
