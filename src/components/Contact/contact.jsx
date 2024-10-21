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
                        <a className="meu-a-contact flex mt-8 bg-black w-44 h-10 items-center justify-center rounded-3xl" href="https://www.instagram.com/oboldcompany/">ENTRE EM CONTATO</a>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-zinc-400 w-72 h-56 rounded-3xl p-10">
                        <FontAwesomeIcon className="h-14" icon={faWhatsapp} />
                        <a className="meu-a-contact flex mt-8 bg-black w-44 h-10 items-center justify-center rounded-3xl" href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%20">ENTRE EM CONTATO</a>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-zinc-400 w-72 h-56 rounded-3xl p-10">
                        <FontAwesomeIcon className="h-14" icon={faEnvelopeOpen} />
                        <a className="meu-a-contact flex mt-8 bg-black w-44 h-10 items-center justify-center rounded-3xl" href="mailto:caiobarreto1acim@gmail.com?subject=Contato%20Bold&body=Mande%20Aqui">ENTRE EM CONTATO</a>
                    </div>

                </div>

            </main>
        </section>
        
    )
}

export default Contact