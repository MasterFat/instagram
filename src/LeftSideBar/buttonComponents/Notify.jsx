export const Notify = ({ showNotify }) => {
  return (
    <div
      className={`${
        showNotify ? "translate-x-16 opacity-100" : "-translate-x-full opacity-0"
      } transition-all ease-out duration-500 w-64 h-full bg-black border-r border-zinc-700 rounded-lg z-40 fixed flex-col text-white font-bold`}
    >
      <div className="w-full h-12 flex items-center">
        <span className="ml-3">通知</span>
      </div>
      <div className="w-full flex items-center">
        <span className="text-sm ml-3">本周</span>
      </div>
      <div className="w-full h-12 flex items-center border-b border-zinc-800"></div>
      <div className="w-full h-10 flex items-center justify-between">
        <span className="text-sm ml-3">更早之前</span>
      </div>
    </div>
  )
}
