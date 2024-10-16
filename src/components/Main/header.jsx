import Logo from '../../../public/logo.png'
import '../Main/main.css'
import '../Main/media-queries.css'

export function Main() {

    return (
        <>
            <header className='flex border-b h-20 items-center flex-row justify-between'>
                <figure>
                    <img className='h-10 w-30 ml-2' src={Logo} alt="Logo Bold" />
                </figure>

                <div className='flex flex-row mr-5 hidden md:block'>
                    <ul className='flex flex-row gap-7'>
                        <li className='minha-li text-black hover:text-purple-800 transition'><a href="">Home</a></li>
                        <li className='minha-li text-black hover:text-purple-800 transition'><a href="">Sobre</a></li>
                        <li className='minha-li text-black hover:text-purple-800 transition'><a href="">Serviço</a></li>
                        <li className='minha-li text-black hover:text-purple-800 transition'><a href="">Contato</a></li>
                    </ul>
                </div>
            </header>

            <main class="meu-main flex flex-col justify-center">
                <div className='ml-7 md: ml-3'>
                    <h1 className='meu-h1'>QUER TRANSFORMAR SUA EMPRESA?</h1>
                    <h2 className='meu-h2 hidden md:block'>A BOLD chegou aquecida no mercado, justamente<br></br> para isto, para resolver seu problema de uma forma<br></br> eficiente e didática, pra que você decole.<br></br>Então entre em contato conosco <span className='font-bold text-purple-300'>AGORA</span>!</h2>
                    <h2 className='meu-h2-mob md:hidden'>A BOLD chegou aquecida no mercado, justamente para isto, para resolver seu problema de uma forma eficiente e<br></br> didática, pra que você decole.<br></br>Então entre em contato conosco <span className='font-bold text-purple-300'>AGORA!</span></h2>
                </div>
                <a href='' className='flex hover:bg-purple-500 transition-all ml-7 h-10 text-sm md: ml-3 mt-5 bg-purple-700 w-56 items-center justify-center h-12 rounded-3xl text-lg font-semibold text-white'>DECOLAR AGORA!</a>
            </main>
        </>
    )
}

export default Main