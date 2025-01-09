"use client"
import ContactForm from "../../components/contact/contactForm";
import Typewriter from 'typewriter-effect';


export default function ContactUs() {
    return (
        <div className=" p-10">

            <div className="s font-serif text-center px-2 md:px-16 lg:px-20">
                <div className="w-full text-2xl lg:text-5xl border-2 border-orange-700 bg-black text-white p-2 rounded-md">  
                <Typewriter 
                    options={{
                        strings: ['Get in Touch'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                    </div>
                <p className="lg:text-2xl xl:text-3xl mb-2 lg:mb-3">+92-3461234567</p>
                <p className="lg:text-2xl xl:text-3xl mb-2 lg:mb-3"><strong>Email:</strong>&nbsp; farhanayaseen@gmail.com</p>
                <p className="lg:text-2xl xl:text-3xl mb-2 lg:mb-3"><strong>Address:</strong>&nbsp; Karachi, Pakistan</p>
            </div>

            <div>
                <ContactForm />
  
            </div>

        </div>
    )
}