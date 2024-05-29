import React from 'react'

export default function HomePage() {
  return (
    <>
      <header className='bg-[url("/src/assets/HomeImage.jpg")] bg-fixed h-screen flex flex-col justify-center align-middle bg-cover bg-no-repeat'>
        {/* <img src={homeimage} alt="" /> */}
        <h2 className='text-center font-raleway text-3xl text-white font-bold'>Make every effort Count</h2>
      </header>
    </>
  )
}
