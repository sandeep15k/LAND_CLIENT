import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import style from './banner.module.css'
import video from '../..//video/bannerVideo.mp4'
import Typewriter from 'typewriter-effect'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    const videofile = document.getElementById('myVideo')
    videofile.play()
    Aos.init()
  }, [])
  return (
    <div className={style.banner}>
      <video autoplay loop muted id="myVideo" className={style.myVideo} >
        <source src={video} type="video/mp4" />
      </video>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11 col-sm-12">
            <div className={`text-center ${style.banner_content}`} >
              <h1 className={style.title}>
                Find Your Dream&nbsp;
                <Typewriter
                  className="d-inline"
                  options={{
                    autoStart: true,
                    loop: true,
                    strings: [
                      "Appartment",
                      "Plaza",
                      "House"
                    ]
                  }}
                />
              </h1>
              <p className={style.tagline}>Unlock the door to your dream home</p>
              <div className={`search_content mt-5 ${style.search_content}`}>
                <div className="row">
                  <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12">
                    <div className={` ${style.classic_search_box}`}>
                      <div className={`form-group ${style.navBtns}`}>
                        <div className={` ${style.choose_propert_type}`}>
                          <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="for-rent" data-bs-toggle="tab" data-bs-target="#rents" type="button" role="tab" aria-selected="false" tabindex="-1">For Rent</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="for-buy" data-bs-toggle="tab" data-bs-target="#buys" type="button" role="tab" aria-selected="true">For Buy</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={`form-group py-1 py-md-0 my-1 my-md-0 ${style.full}`}>
                        <div className={` ${style.input_with_icon}`}>
                          <input type="text" className="form-control" placeholder="Search for locality, landmark, project, or builder"/>
                            <img src="https://themezhub.net/veshm-demo/veshm/assets/img/pin.svg" width="20" alt=""/>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12">
                      <div className="form-group">
                        <button type="submit" className={`btn btn-primary w-100 ${style.btn}`}>Search</button>
                      </div>
                    </div>

                  </div>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner