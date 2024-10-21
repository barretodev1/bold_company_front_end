import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Servico from '../../../public/servico.webp'
import Social from '../../../public/social.webp'
import WebSit from '../../../public/website.webp'
import LP from '../../../public/landing.webp'
import TP from '../../../public/trafego.webp'
import BLOG from '../../../public/blog.webp'
import '../Service/service.css'
import '../Service/service-mobile.css'

export function Service() {

        useEffect(() => {
            AOS.init({
                duration: 1000, // duração da animação
            });
        }, []);
    

    return (
        <section id='servico' className="flex flex-col items-center justify-center p-16">
            <div className='flex items-center justify-center'>
                <h1 className='service-h1'>SERVIÇO</h1>
            </div>

            <main className='flex items-center justify-center gap-7 mt-10 flex-col md:hidden'>
                <div className='flex flex-col gap-8 md:hidden'>
                <div data-aos="fade-up" className='div-service flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                    <img className='flex h-10 w- md:h-20' src={WebSit} />
                    <h1 className='mt-10 flex items-center justify-center'>WebSite</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Quer um WebSite? Com diversas rotas, imagens e atrações intuitivas, para prender seu cliente através de gatilhos mentais? Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20lucrar%20mais!%20Vamos%20fazer%20o%20or%C3%A7amento%20de%20um%20WebSite?">QUERO LUCRAR</a>
                        </div>
                    </div>


                    <div data-aos="fade-up" className='div-service flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                        <img className='flex h-10 w-62 md:h-20' src={TP} />
                        <h1 className='mt-10 flex items-center justify-center'>Tráfego Pago</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Quer vender e captar mais clientes no seu business né? Relaxa que temos o essencial pra você! Vamos te mostrar o poder do nosso Tráfego Pago. Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20lucrar%20mais!%20Vamos%20fazer%20o%20or%C3%A7amento%20de%20um%20Tr%C3%A1fego%20Pago?">QUERO LUCRAR</a>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-8 md:hidden'>
                    <div data-aos="fade-up" className='div-servicee flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                        <img className='img-lp flex h-6 w-96 md:h-10' src={LP} />
                        <h1 className='mt-10 flex items-center justify-center'>Landing Page</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Está com dificuldades em captar <span className='text-green-900 font-extrabold'>LEADS</span>, né? Que tal uma Landing Page? Garanto que irá te ajudar imensamente! Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20captar%20mais%20leads!%20Vamos%20fazer%20o%20or%C3%A7amento%20de%20uma%20Landing%20Page?">QUERO LUCRAR</a>
                        </div>
                    </div>


                    <div data-aos="fade-up" {...'height: 40px'} className='div-service flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                        <img className='flex h-10 w- md:h-20' src={BLOG} />
                        <h1 className='mt-10 flex items-center justify-center'>E-commerce</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Opa! Está com quase tudo pronto, mas precisa do seu E-commerce (Site), para vender diretamente pelo site, né? Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20criar%20a%20minha%20loja!%20Vamos%20fazer%20o%20or%C3%A7amento%20de%20um%20E-Commerce?">QUERO LUCRAR</a>
                        </div>
                    </div>
                </div>

                <div className='div-serviceee flex flex-col gap-8 md:flex-col'>
                <div data-aos="fade-up" className='div-serviceee flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                        <img className='flex h-10 w-72 md:h-20' src={Social} />
                        <h1 className='mt-10 flex items-center justify-center'>Social Media</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Já esta grande nas redes sociais, ou precisa de uma administração profissional e eficiente? Que ganhe cada vez mais clientes? Eu posso resolver pra você. Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20gerenciar%20minhas%20redes!%20Quero%20contratar%20um%20Social%20Media!">QUERO LUCRAR</a>
                        </div>
                    </div>
                </div>
                
               
            </main>

            <main className='flex items-center justify-center mt-16 flex-col gap-10 hidden md:block'>

               <div className='flex gap-8 flex-col md:flex-row'>
                    <div data-aos="fade-up" className='div-service flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                    <img className='flex h-10 w- md:h-20' src={WebSit} />
                    <h1 className='mt-10 flex items-center justify-center'>WebSite</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Quer um WebSite? Com diversas rotas, imagens e atrações intuitivas, para prender seu cliente através de gatilhos mentais? Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20lucrar%20mais!%20Vamos%20fazer%20o%20or%C3%A7amento%20de%20um%20WebSite?">QUERO LUCRAR</a>
                        </div>
                    </div>


                    <div data-aos="fade-up" className='div-service flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                        <img className='flex h-10 w-62 md:h-20' src={TP} />
                        <h1 className='mt-10 flex items-center justify-center'>Tráfego Pago</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Quer vender e captar mais clientes no seu business né? Relaxa que temos o essencial pra você! Vamos te mostrar o poder do nosso Tráfego Pago. Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20lucrar%20mais!%20Vamos%20fazer%20o%20or%C3%A7amento%20de%20um%20Tr%C3%A1fego%20Pago?">QUERO LUCRAR</a>
                        </div>
                    </div>
                </div>


                <div className='flex gap-8 flex-col mt-10 md:flex-row'>
                    <div data-aos="fade-up" className='div-service flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                        <img className='flex h-10 w-72 md:h-20' src={LP} />
                        <h1 className='mt-10 flex items-center justify-center'>Landing Page</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Está com dificuldades em captar <span className='text-green-900 font-extrabold'>LEADS</span>, né? Que tal uma Landing Page? Garanto que irá te ajudar imensamente! Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20captar%20mais%20leads!%20Vamos%20fazer%20o%20or%C3%A7amento%20de%20uma%20Landing%20Page?">QUERO LUCRAR</a>
                        </div>
                    </div>


                    <div data-aos="fade-up" {...'height: 40px'} className='div-service flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                        <img className='flex h-10 w- md:h-20' src={BLOG} />
                        <h1 className='mt-10 flex items-center justify-center'>E-commerce</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Opa! Está com quase tudo pronto, mas precisa do seu E-commerce (Site), para vender diretamente pelo site, né? Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20criar%20a%20minha%20loja!%20Vamos%20fazer%20o%20or%C3%A7amento%20de%20um%20E-Commerce?">QUERO LUCRAR</a>
                        </div>
                    </div>
                </div>

                <div className='div-last flex items-center justify-center gap-8 flex-col mt-10 md:flex-row'>
                    <div data-aos="fade-up" className='div-servicee flex items-center flex-col bg-zinc-400 p-10 rounded-2xl'>
                        <img className='flex h-10 w-72 md:h-20' src={Social} />
                        <h1 className='mt-10 flex items-center justify-center'>Social Media</h1>
                        <div className='div-web flex flex-col items-start'>
                            <p className='mt-5'>Já esta grande nas redes sociais, ou precisa de uma administração profissional e eficiente? Que ganhe cada vez mais clientes? Eu posso resolver pra você. Então entre em contato <span className='text-purple-600 font-bold'>AGORA!</span></p>
                            <a className='mt-4' href="https://api.whatsapp.com/send?phone=5511933255476&text=Ol%C3%A1!%20Tudo%20bem?%0APreciso%20gerenciar%20minhas%20redes!%20Quero%20contratar%20um%20Social%20Media!">QUERO LUCRAR</a>
                        </div>
                    </div>
                </div>
                
            </main>
        </section>
    )
}

export default Service