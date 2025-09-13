import React from 'react'

const Projects = () => {
  return (
    <div className='min-vh-100 main-black' id='projects'>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-inner">  
                <div class="carousel-item active">
        
                <img src="/assets/loop.png" class="d-block w-100" alt="..." />
                    <div className='b-mt'>
                    <button className='b-main b-main-hover b'><a href="https://www.youtube.com/watch?v=U8A_GpiDMRo" target="_blank">DEMO</a></button>
                    <button className='b-main b-main-hover b'><a href='https://github.com/farrahpepino/SocialNetworkingApp' target="_blank">CODE</a></button>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="/assets/aia.png" class="d-block w-100" alt="..." />
                    <div className='b-mt'>
                    <button className='b-main b-main-hover b'><a href='https://www.youtube.com/watch?v=AoDgb6FLF0o' target="_blank">DEMO</a></button>
                    <button className='b-main b-main-hover b'><a href='https://github.com/farrahpepino/EcommerceApp' target="_blank">CODE</a></button>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="/assets/amore.png" class="d-block w-100" alt="..." />
                    <div className='b-mt'>
                    <button className='b-main b-main-hover b'><a href='https://farrahpepino-poemgenerator.netlify.app/' target="_blank">DEMO</a></button>
                    <button className='b-main b-main-hover b'><a href='https://github.com/farrahpepino/PoemGenerator' target="_blank">CODE</a></button>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="/assets/weather.png" class="d-block w-100" alt="..." />
                    <div className='b-mt'>
                    <button className='b-main b-main-hover b'><a href='https://farrahpepino-weatherapp.netlify.app/' target="_blank">DEMO</a></button>
                    <button className='b-main b-main-hover b'><a href='https://github.com/farrahpepino/WeatherApp' target="_blank">CODE</a></button>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="/assets/tala-mobile.png" class="d-block w-100" alt="..." />
                    <div className='b-mt'>
                    <button className='b-main b-main-hover b'><a href='https://www.figma.com/design/ayF3aZh1dVA11O7Edkl9Bh/Archives-FINAL?node-id=0-1&t=JbxM6CBUdYG0jCQc-1' target="_blank">DESIGN</a></button>
                    <button className='b-main b-main-hover b'><a href='https://github.com/farrahpepino/PhotosharingApp-Mobile' target="_blank">CODE</a></button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Projects
