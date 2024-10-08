import TailCard from "../UI/TailCard"
import { useState, useEffect, useRef } from "react"

export default function Gallery() {
  return (
    <div>
      Gallery
      <TailCard imgUrl="http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg"
      title="서울빛초롱축제"
      content="서울특별시 종로구"
      kw="서울빛초롱축제, 서울특별시 종로구, 2018 하반기 기획사진, 청계천 야경, 서울 등 축제, 서울 축제" />
    </div>
  )
}
