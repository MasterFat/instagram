export const Test = () => {
  return (
    <div className="w-[500px] h-[500px] relative left-[25rem] top-[8rem] cube">
      <div className="absolute w-full h-full bg-red-500 front"></div>
      <div className="absolute w-full h-full bg-green-500 left"></div>
      <div className="absolute w-full h-full bg-blue-500 right"></div>
      <div className="absolute w-full h-full bg-purple-500 back"></div>
    </div>
  )
}
