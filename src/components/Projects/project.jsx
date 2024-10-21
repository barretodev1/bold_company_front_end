import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Projects/project.css'
import '../Projects/media-mobile.css'
import PJ from '../../../public/projetos.png'
import ADV from '../../../public/project-1.png'
import LK from '../../../public/project-2.png'
import RT from '../../../public/restaurante.png'
import MC from '../../../public/micro.png'
import AM from '../../../public/animação-removebg-preview (1).png'
import RA from '../../../public/MARCENARIA.png'
import RAR from '../../../public/rarity.png'
import CD from '../../../public/Logo_Nutricionista_Ilustrado_Verde.png'

export function Projects() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // duração da animação
        });
    }, []);

    return (
        <section className='flex items-center justify-center flex-col mt-15 md:mt-10' id="projects">
                <h1 className='service-h1'>PROJETOS</h1>
                <div className="experience-details-container">
                <div className="about-containers">
                    <div data-aos="flip-left" className="details-container color-container bg-zinc-400">
                        <div className="article-container">
                            <img src={ADV} alt="Project 1" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Advocacia</h2>
                        <div className="btn-container">
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://github.com/barretodev1/advocaciaBarreto'>Github</a>
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://advocaciabarreto.netlify.app/'>Site</a>
                        </div>
                    </div>
                    <div data-aos="flip-right" className="details-container color-container bg-zinc-400">
                        <div className="article-container">
                            <img src={LK} alt="Project 2" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">LinkTree</h2>
                        <div className="btn-container">
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://github.com/barretodev1/linktree'>Github</a>
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://mylinktreebarreto.netlify.app/'>Site</a>
                        </div>
                    </div>
                    <div data-aos="flip-left" className="details-container color-container bg-zinc-400">
                        <div className="article-container">
                            <img src={RT} alt="Project 3" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Restaurante</h2>
                        <div className="btn-container">
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://github.com/barretodev1/restaurante'>Github</a>
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://myrestaurantebarreto.netlify.app/'>Site</a>
                        </div>
                    </div>

                    <div data-aos="flip-right" className="details-container color-container bg-zinc-400">
                        <div className="article-container">
                            <img src={MC} alt="Project 4" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Microsoft</h2>
                        <div className="btn-container">
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://github.com/barretodev1/meuMicro'>Github</a>
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://meumicro.netlify.app/'>Site</a>
                        </div>
                    </div>

                    <div data-aos="flip-left" className="details-container color-container bg-zinc-400">
                        <div className="article-container">
                            <img src={AM} alt="Project 4" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Animação</h2>
                        <div className="btn-container">
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://github.com/barretodev1/projectAnimation'>Github</a>
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://myprojectanimation.netlify.app/'>Site</a>
                        </div>
                    </div>

                    <div data-aos="flip-right" className="details-container color-container bg-zinc-400">
                        <div className="article-container">
                            <img src={RA} alt="Project 4" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">ReArts</h2>
                        <div className="btn-container">
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://github.com/barretodev1/ReArts/tree/master'>Github</a>
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://rearts.netlify.app/'>Site</a>
                        </div>
                    </div>

                    <div data-aos="flip-left" className="details-container color-container bg-zinc-400">
                        <div className="article-container">
                            <img src={RAR} alt="Project 4" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Rarity</h2>
                        <div className="btn-container">
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://github.com/barretodev1/RarityProject'>Github</a>
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://raritytech.netlify.app/'>Site</a>
                        </div>
                    </div>

                    <div data-aos="flip-right" className="details-container color-container bg-zinc-400">
                        <div className="article-container">
                            <img src={CD} alt="Project 4" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Carla Dias Nutri</h2>
                        <div className="btn-container">
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://github.com/barretodev1/example-nutri'>Github</a>
                            <a className="cursor-pointer btn btn-color-2 project-btn" href='https://examplenot.netlify.app/'>Site</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}