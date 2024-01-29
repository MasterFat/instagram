import axios from "axios"
import Slider from "react-slick"
import { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Slick = () => {
  const [story, setStory] = useState([])

  const getStory = () => {
    axios.get("http://localhost:8000/story").then((res) => setStory(res.data))
  }

  useEffect(() => getStory(), [])

  function NextArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, right: "5px", top: "38px", zIndex: 1 }} onClick={onClick} />
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, left: "5px", top: "38px", zIndex: 1 }} onClick={onClick} />
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <div className="w-full border h-20 my-2 relative">
      <Slider {...settings}>
        {story.map((item) => (
          <div key={item.id} className="ml-1">
            <div className="border-0 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full w-14 h-14 flex justify-center items-center">
              <div className="border-0 bg-black rounded-full w-[3.2rem] h-[3.2rem] flex justify-center items-center">
                <div className="m-0.5 border-0 rounded-full bg-zinc-900">
                  <img src={item.img} alt="" />
                </div>
              </div>
            </div>

            <div className="w-14 flex justify-center items-center">
              <span className="text-white text-xs text-center truncate w-8">{item.account}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
