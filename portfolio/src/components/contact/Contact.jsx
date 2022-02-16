import './contact.css'
import Wa from '../../img/wa2.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_7yhxoyf",
          "template_b3w7b3m",
          formRef.current,
          "user_pldfDaZlBxayziLEx13xQ"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
      };
  
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discus Your Project</h1>
          <div className="c-info">
            <div className="c-inf0-item">
              <img src={Wa} alt="" className="c-icon" />
              085155032886
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              adiyogo3@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Dewi Sartika Street,East-Jakarta, Indonesia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> <br /> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type='text' placeholder="Name" name="user_name" />
            <input type='text' placeholder="WhatsApp" name="user_wa" />
            <input type='text' placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button> <br /> <br />
            {done && "Your email has been sent, if you don't receive a reply within 3 days, please directly contact via WhatsApp, thank you"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact