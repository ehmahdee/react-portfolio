import { useState, useRef, useEffect } from 'react'
import Loader from 'react-loaders'
import './index.scss';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
                'service_vudzl2l',
                'contact_form',
                form.current,
                'dn6cfyVKNNHk_VnKK'
            )
            .then(
                (result) => {
                    alert('Message sent!')
                    window.location.reload(false)
                },
                (error) => {
                    alert('Failed to send message, please try again')
                }
            )
      }

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                    idx={15}
                    />
                </h1>
                <p>
                    Let's connect!
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea
                                placeholder="Message"
                                name="message"
                                required>
                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact