import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import style from './banner.module.css'
import video from '../..//video/bannerVideo.mp4'

const Banner = () => {
    useEffect( () => {
       const videofile = document.getElementById('myVideo')
       videofile.play()
    },[])
  return (
    <div className={style.banner}>
        <video autoplay loop muted id="myVideo" className={style.myVideo} >
            <source src={video} type="video/mp4"/>
        </video>
      <Container>
        <div className='text-center'>
            Container
        </div>
      </Container>
    </div>
  )
}

export default Banner