import React from 'react'
import elon from './images/elon.png'
import sundar from './images/sundar.png'
import upsana from './images/upsana.png'
const HomeComponent = () => {
  return (
    <section className='background'>
        <div className='mt-5  text-center float-left'>
    <h2 className='text-white '> Makes Team Management Easy!!!</h2>
    <h2 className='text-white'> THEY CHANGED THE WORLD!!!</h2>
    <h2 className='text-danger'>NOW YOU!!!</h2>
    
    </div>
    <img
            src={elon}
            width="350"
            height="auto"
            className="float-right"
            alt=""
          />
          <img
            src={sundar}
            width="350"
            height="auto"
            className="float-right"
            alt=""
          />
           <img
            src={upsana}
            width="350"
            height="auto"
            className="float-right"
            alt=""
          />
   

    </section>
  )
}

export default HomeComponent