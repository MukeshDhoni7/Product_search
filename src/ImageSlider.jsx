import React from 'react'
import { Swiper,SwiperSlide} from 'swiper/react'

import { Pagination,Navigation,Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ImageSlider = () => {

    const photo = ["https://i.pinimg.com/474x/ac/64/38/ac6438d606b5d17819ddb8c2dac8657a.jpg","https://i.pinimg.com/474x/ac/64/38/ac6438d606b5d17819ddb8c2dac8657a.jpg","https://i.pinimg.com/474x/72/47/64/724764b8f9c81bc6e7e812a89f1acd41.jpg","https://i.pinimg.com/474x/58/8f/94/588f94d97c8a4a5d5e8497e6246d9a4b.jpg"]


  return (
    <div className="w-full h-lvh flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto border-2 h-[400px] flex justify-center items-center p-4">
      </div>
    </div>
  )
}

export default ImageSlider