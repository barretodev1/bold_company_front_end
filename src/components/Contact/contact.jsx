import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../Contact/contact.css'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { faEnvelopeCircleCheck, faEnvelopeOpen, faEnvelopeOpenText, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"

export function Contact() {

    return (
        
        <section id="contato" className="flex flex-col p-10 h-auto items-center mt-6">
            <h1 className='service-h1'>CONTATO</h1>

            <main className="flex gap-10 mt-10 flex-col md:flex-col">
                <div className="flex gap-5 w-full flex-col md:flex-row">

                    <div className="flex flex-col items-center justify-center bg-zinc-400 w-72 h-56 rounded-3xl p-10">
                        <FontAwesomeIcon className="h-14" icon={faInstagram} />
                        <a className="meu-a-contact flex mt-8 bg-black w-44 h-10 items-center justify-center rounded-3xl" href="">ENTRE EM CONTATO</a>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-zinc-400 w-72 h-56 rounded-3xl p-10">
                        <FontAwesomeIcon className="h-14" icon={faWhatsapp} />
                        <a className="meu-a-contact flex mt-8 bg-black w-44 h-10 items-center justify-center rounded-3xl" href="">ENTRE EM CONTATO</a>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-zinc-400 w-72 h-56 rounded-3xl p-10">
                        <FontAwesomeIcon className="h-14" icon={faEnvelopeOpen} />
                        <a className="meu-a-contact flex mt-8 bg-black w-44 h-10 items-center justify-center rounded-3xl" href="">ENTRE EM CONTATO</a>
                    </div>

                </div>

            </main>
        </section>
        
    )
}

export default Contact