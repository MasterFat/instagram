//"搜尋" 按鈕 (滑出式側欄)
export const Search = ({ openSearch }) => {
  return (
    <div className={`${openSearch() ? "slide" : ""} w-64 h-full bg-black border-r border-zinc-700 rounded-lg z-40 fixed flex-col`}>
      <div className="w-full h-12 flex items-center ">
        <span className="text-white font-bold ml-3">搜尋</span>
      </div>
      <div className="w-full h-12 flex items-center border-b border-zinc-800">
        <input
          type="text"
          id="input"
          placeholder="搜尋"
          className="w-11/12 h-3/5 m-auto border-0 rounded-md bg-zinc-800 placeholder:text-sm placeholder:relative placeholder:left-3 placeholder:-top-0.5"
        />
      </div>
      <div className="w-full h-12 flex items-center justify-between">
        <span className="text-white text-sm font-bold ml-3">最近</span>
        <button className="text-sky-500 text-sm font-bold mr-3 hover:text-white">全部清除</button>
      </div>
    </div>
  )
}
