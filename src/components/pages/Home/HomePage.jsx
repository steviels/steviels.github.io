import GithubSVG from "@assets/svgs/github.jsx";
import LinkedinSVG from "@assets/svgs/linkedin.jsx";
import WebsiteSVG from "@assets/svgs/website.jsx";

import "./HomePage.css";

export default function HomePage () {
    return (
        <div id = "hero-page" className = "grid grid-cols-1 grid-rows-[95vh_1fr_1fr] md:grid-cols-2 md:grid-rows-[95vh_1fr] gap-x-4 min-h-screen h-full w-full text-white">
            <section id = "hero-section" className = "col-span-1 md:col-span-2 flex flex-row flex-nowrap items-center justify-around text-base md:text-2xl">
                <div className = "flex-1">
                    <div className = "w-fit mx-auto">
                        <p>Hey there! I'm</p>
                        <h1 className = "text-4xl md:text-5xl text-yellow-400">STEVEN SHANNON</h1>
                        <p>a Computer Science Student @ Drexel University,</p>
                        <p>& IT Generalist @ Aramark</p>
                    </div>
                    
                    <span className = "mt-8 flex flex-row flex-nowrap items-center justify-evenly">
                        <a href = "https://github.com/steviels" target = "_blank">
                            <GithubSVG className = "h-8 w-8 md:h-12 md:w-12 stroke-white fill-none transition-all duration-500 hover:stroke-yellow-400" />
                        </a>

                        <a href = "https://www.linkedin.com/in/steven-shannon" target = "_blank">
                            <LinkedinSVG className = "h-8 w-8 md:h-12 md:w-12 stroke-white fill-none transition-all duration-500 hover:stroke-yellow-400" />
                        </a>
                        
                        <a href = "https://www.steviels.com" target = "_blank">
                            <WebsiteSVG className = "h-8 w-8 md:h-12 md:w-12 stroke-white fill-none transition-all duration-500 hover:stroke-yellow-400" />
                        </a>
                    </span>
                </div>

                <div className = "flex-1 hidden lg:block">
                    <div id = "hero-animation" className = "block h-fit">
                        
                    </div>
                </div>
            </section>

            <section id = "work-section" className = "bg-red-100">
            </section>

            <section id = "project-section" className = "bg-blue-50">
            </section>
        </div>
    )
}