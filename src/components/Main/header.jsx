import Logo from '../../../public/logo.png';
import '../Main/main.css';
import '../Main/media-queries.css';

export function Main() {
    return (
        <>
            <header className='flex border-b h-20 items-center flex-row justify-between'>
                <figure>
                    <img className='h-10 w-30 ml-2' src={Logo} alt="Logo Bold" />
                </figure>

                <div className='flex-row mr-5 hidden md:block'>
                    <ul className='flex flex-row gap-7'>
                        <li className='minha-li text-black hover:text-purple-800 transition'>
                            <a href="#home">Home</a>
                        </li>
                        <li className='minha-li text-black hover:text-purple-800 transition'>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li className='minha-li text-black hover:text-purple-800 transition'>
                            <a href="">Serviço</a>
                        </li>
                        <li className='minha-li text-black hover:text-purple-800 transition'>
                            <a href="">Contato</a>
                        </li>
                    </ul>
                </div>
            </header>

            <main className="meu-main flex flex-col justify-center">
                <div className='ml-7 md:ml-3'>
                    <h1 className='meu-h1'>QUER TRANSFORMAR SUA EMPRESA?</h1>
                    <h2 className='meu-h2 mt-3 hidden md:block'>
                        A BOLD chegou aquecida no mercado, justamente<br />
                        para isto, para resolver seu problema de uma forma<br />
                        eficiente e didática, pra que você decole.<br />
                        Então entre em contato conosco <span className='font-bold text-purple-300'>AGORA</span>!
                    </h2>
                </div>
            </main>
        </>
    );
}

export default Main;
