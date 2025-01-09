
const ContactForm = () => {
    return (
        <div className="w-full h-auto font-serif text-black mt-5 lg:mt-12 xl:mt-16 2xl:mt-20 sm:px-32 md:px-40 lg:px-32 xl:px-48 2xl:px-60 ">
            <form action="https://formspree.io/f/manybyao" method="POST" className="place-items-center border-2 border-orange-700 bg-black rounded-lg">
                <div className="lg:flex lg:space-x-12 my-10 mx-16 2xl:mt-12 ">
                    <input type="text" placeholder="Name" required className="mb-10 text-sm md:text-lg xl:text-xl 2xl:text-2xl w-56 h-10 md:w-60 lg:w-72 lg:h-10 xl:w-80 xl:h-12 2xl:w-[400px] 2xl:h-16 rounded-md border-2" />
                    <input type="email" name="email" id="email" placeholder="Email" className="text-sm md:text-lg xl:text-xl 2xl:text-2xl w-56 h-10 md:w-60 lg:w-72 lg:h-10 xl:w-80 xl:h-12 2xl:w-[400px] 2xl:h-16 rounded-md border-2" />
                </div>

                <div>
                    <input type="text" placeholder="Subject" className="text-sm md:text-lg xl:text-xl 2xl:text-2xl block w-56 h-10 md:w-60 lg:w-[625px] lg:h-10 xl:w-[750px] xl:h-12 2xl:w-[850px] 2xl:h-16 mb-10 border-2 rounded-md" />
                    <textarea name="message" id="message" placeholder="Type your Message" required className="text-sm md:text-lg xl:text-xl 2xl:text-2xl block rounded-md w-56 h-32 md:w-60 lg:w-[625px] lg:h-52 xl:w-[750px] xl:h-60 2xl:w-[850px] 2xl:h-72 border-2"></textarea>
                </div>
                <div className="py-5 lg:py-10">

                    <input type="submit" value="Send Email" className="border-2 border-orange-700 text-white block  rounded-md bg-orange-00 lg:rounded-lg xl:rounded-xl w-28 h-10 lg:w-40 lg:h-12 lg:text-lg xl:w-60 xl:h-16 xl:text-2xl 2xl:w-72 2xl:h-20 2xl:text-3xl font-extrabold animate-bounce" />
                </div>

            </form>
        </div>
    )

}

export default ContactForm