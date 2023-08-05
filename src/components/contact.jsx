import "../styles/contacts.scss";
import React from 'react'

const Contact = () => {
  return (
    <div className="contacts">
        <main >
    <h1>Contact Us</h1>
    <form >
        <div>
        <label >Name</label>
        <input type="text" required placeholder="ABC"/>
        </div>
        <div>
        <label >Email</label>
        <input type="email" required placeholder="abc@gmail.com"/>
        </div>
        <div>
        <label >Message</label>
        <input type="text" required placeholder="--Message--"/>
        </div>
        <button type="submit">Send</button>
    </form>
   </main>
    </div>
   
  )
}

export default Contact
