import Logo from '../../../public/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../components/About/about.css'
import { faMapPin } from '@fortawesome/free-solid-svg-icons/faMapPin'



export function About() {

    return (
        <>
        
        <section id='sobre' className='p-16'>
            <figure className='flex items-center justify-center'>
                <img className='h-24 w-72 md:h-28' src={Logo} alt="Logo" />
            </figure>

            <div className='flex flex-col gap-10 items-center mt-16 justify-center md:flex-row'>
                <div className='meu-about flex w-80 hover:translate-x-0 md:hover:-translate-x-2 transition-all items-center justify-center flex-col border bg-zinc-400 h-80 rounded-2xl p-4'>
                    <h1 className='bg-zinc-400 p-2 z-10'>MISSÃO</h1>
                    <h2 className='flex items-center justify-center text-center p-4'>Nossa missão é DECOLAR o teu negócio, e te ajudar a lucrar, inovar e capacitar cada vez mais clientes, vamos pegar na sua mão, e te ajudar até a decolagem de sua empresa.</h2>
                </div>

                {/* ESPAÇO */}

                <div className='meu-about flex w-80 hover:-translate-y-0 md:hover:-translate-y-2 transition-all flex items-center justify-center flex-col border bg-zinc-400 h-80 w-64 rounded-2xl p-4'>
                    <h1 className='bg-zinc-400 p-2 z-10'>VISÃO</h1>
                    <h2 className='flex items-center justify-center text-center p-4'>Temos uma missão de honra e empreendedora, se tivermos uma missão dada, teremos a missão CUMPRIDA, lembrando que, somos uma empresa frequentemente inovadora</h2>
                </div>

                {/* ESPAÇO */}

                <div className='meu-about flex w-80 hover:translate-x-0 md:hover:translate-x-2 transition-all flex items-center justify-center flex-col border bg-zinc-400 h-80 w-64 rounded-2xl p-4'>
                    <div>
                        <h1 className='sticky top-0 bg-zinc-400 p-2 z-10'>VALORES</h1>
                    </div>

                    <div className='flex flex-col justify-center gap-3 mt-4'>
                        <div className='flex flex-row gap-3'>
                            <FontAwesomeIcon icon={faMapPin}/>
                            <h2>Transparência</h2>
                        </div>

                        <div className='flex flex-row gap-3'>
                            <FontAwesomeIcon icon={faMapPin}/>
                            <h2>Criatividade</h2>
                        </div>

                        <div className='flex flex-row gap-3'>
                            <FontAwesomeIcon icon={faMapPin}/>
                            <h2>Resultados</h2>
                        </div>


                        <div className='flex flex-row gap-3'>
                            <FontAwesomeIcon icon={faMapPin}/>
                            <h2>Lucratividade</h2>
                        </div>

                        <div className='flex flex-row gap-3'>
                            <FontAwesomeIcon icon={faMapPin}/>
                            <h2>Excelência</h2>
                        </div>
                    </div>
                </div>
            </div>


        </section>

        </>
    )
}

export default About