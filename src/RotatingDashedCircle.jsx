import React, { useState, useEffect } from "react"

export const RotatingDashedCircle = () => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1)
    }, 30)

    return () => clearInterval(intervalId)
  }, [])

  const circleStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "2px dashed white",
    position: "absolute",
    transform: `rotate(${rotation}deg)`,
  }

  return <div style={circleStyle}>{/* You can add content inside the circle if needed */}</div>
}
