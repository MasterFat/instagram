import axios from "axios"
import { useEffect, useState } from "react"

//Slder套件
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Slick = ({ showStorys, setShowStorys, setStoryId, spin, setSpin }) => {
  //限時動態資料
  const [story, setStory] = useState([])
  //Slick套件每次顯示X個物件設定
  const [toShow, setToShow] = useState(8)

  //取得限時動態資料
  const getStory = () => {
    axios.get("http://localhost:8000/story").then((res) => setStory(res.data))
  }

  useEffect(() => {
    getStory()

    //當視窗寬度小於600時，則設定Slick套件每次只顯示五個物件，否則為八個物件
    const showObjects = () => {
      if (window.innerWidth < 600) {
        setToShow(5)
      } else {
        setToShow(8)
      }
    }
    window.addEventListener("resize", showObjects)
    return () => {
      window.removeEventListener("resize", showObjects)
    }
  }, [])

  //自定義左箭頭
  function NextArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, right: "5px", top: "38px", zIndex: 1 }} onClick={onClick} />
  }
  //自定義右箭頭
  function PrevArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style, left: "5px", top: "38px", zIndex: 1 }} onClick={onClick} />
  }

  //Slick套件設定檔
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: toShow,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <div className="w-full h-20 my-2 relative">
      <Slider {...settings}>
        {story.map((item) => (
          <div key={item.id} className="ml-1">
            <button
              onClick={() => {
                setShowStorys(!showStorys), setStoryId(item.id), setSpin(!spin)
              }}
            >
              <div className="border-0 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full w-14 h-14 flex justify-center items-center">
                <div className="border-0 bg-black rounded-full w-[3.2rem] h-[3.2rem] flex justify-center items-center">
                  <div className="m-0.5 border-0 rounded-full bg-zinc-900">
                    <img src={item.avatar} alt="" />
                  </div>
                </div>
              </div>

              <div className="w-14 flex justify-center items-center">
                <span className="text-white text-xs text-center truncate w-8">{item.account}</span>
              </div>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  )
}
