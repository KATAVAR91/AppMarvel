import React from 'react';
import './Home.css';
import marvelimg from '../../assets/comic 4.jpg';
import marvelimg1 from '../../assets/comics2.jpg';
import marvelimg2 from '../../assets/comic3.jpg';

const Home = () => {
  return (
    <>
      <main className='home-wrapper'>
        <div id='carouselExampleIndicators' className='carousel'>
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>

          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={marvelimg} className='d-block-1' alt='Slide 1' />
            </div>

            <div className='carousel-item'>
              <img src={marvelimg1} className='d-block-2' alt='Slide 2' />
            </div>

            <div className='carousel-item'>
              <img src={marvelimg2} className='d-block-3' alt='Slide 3' />
            </div>
          </div>

          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;








































// import React from 'react'
// import "./Home.css"
// import marvelimg from "../../assets/comics.jpg"
// import marvelimg1 from '../../assets/marvel2.jpg';
// import marvelimg2 from '../../assets/marvel3.jpg';

// const Home = () => {
//   return (
//     <>

//       <main className='wrapper'>
//         <div id="carouselExampleIndicators" class="carousel slide">

//           <div class="carousel">
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
              
//             </button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
            
//             </button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
              
//             </button>
//           </div>

//           <div class="carousel-inner">

//             <div class="carousel-item active">
//             <img src={marvelimg} className='d-block w-100' alt='Slide 1' />
//             </div>

//             <div class="carousel-item">
//             <img src={marvelimg1} className='d-block w-100' alt='Slide 2' />
//             </div>

//             <div class="carousel-item">
//             <img src={marvelimg2} className='d-block w-100' alt='Slide 3' />
//             </div>


//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//               <span class="carousel-control-prev-icon" aria-hidden="true">
//               </span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//               <span class="carousel-control-next-icon" aria-hidden="true">
//               </span>
//               <span class="visually-hidden">Next</span>
//             </button>

//           </div>


//         </div>


//       </main>

//     </>
//   )
// }

// export default Home
