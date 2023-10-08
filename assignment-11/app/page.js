
import Button from './(components)/navbar/button/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>

    <main className='mainHome'>
      <div className="left">
      <h1>Creative Digital Agency</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam, ab atque similique voluptatum perferendis!</p>
      <Button title="Learn More"/>
      </div>
      <div className="right">
        <h1>This is a Image</h1>
      </div>
    </main>
    </>
  )
}
