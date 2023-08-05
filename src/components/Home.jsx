import React from 'react'
import vg from "../Assets/2.webp"
import{
  AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram
} from "react-icons/ai"
const Home = () => {
  return (
    <>
     <div className='home' id="home">
      <main>
        <h1>Shipkart</h1>
        <p>One Step Solution For Your Business</p>
      </main>
    </div> 
    <div className='home2'>
      <img src={vg} alt="Grapichs" />
      <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi? Voluptatibus nam omnis harum doloremque ea repellat magnam error asperiores voluptate, odio exercitationem molestiae sunt nesciunt saepe odit hic, repellat possimus qui reiciendis doloribus unde. Maxime, atque labore dolore saepe obcaecati sequi?</p>
      
      </div>
        
    </div>
    <div className='home3' id="about">
    <div>
      <h1>Who We are ?</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quos temporibus impedit libero quam, in quaerat voluptatem inventore mollitia, hic velit repellendus distinctio quas perspiciatis vitae saepe. Quam esse, libero minus ullam molestiae dicta asperiores, accusantium velit dolorem nobis ratione alias debitis sapiente mollitia at aut eligendi fugit doloremque autem pariatur, repellendus eum provident ducimus excepturi. Dolore ratione necessitatibus ipsam quia. Ipsa aut a dicta, repudiandae veniam vel ipsum nobis! Molestias asperiores, rerum numquam obcaecati soluta quidem quasi suscipit dolor! Necessitatibus maxime possimus perspiciatis ad mollitia id.
    </p>
    </div>
    </div>
    <div className="home4" id="brand">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.2s"
              }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p> 
          </div>
          <div style={{
            animationDelay:"0.6s"
              }}>
                <AiFillGoogleCircle/>
                <p>Google</p> 
          </div>
          <div style={{
            animationDelay:"0.8s"
              }}>
                <AiFillYoutube/>
                <p>Youtube</p> 
          </div>
          <div style={{
            animationDelay:"1s"
              }}>
                <AiFillInstagram/>
                <p>Instagram</p> 
          </div>
        </article>
      </div>
    </div>
    </>

  )
}

export default Home
