import "./HomePage.css";

export default function HomePage () {
    return (
        <div id = "hero-page" className = "grid grid-cols-1 grid-rows-[95vh_1fr_1fr] md:grid-cols-2 md:grid-rows-[95vh_1fr] gap-x-4 min-h-screen h-full w-full text-white">
            <section id = "hero-section" className = "col-span-1 md:col-span-2 flex flex-row flex-nowrap items-center justify-around text-base md:text-2xl">
                <div>
                    <p>Hey there! I'm</p>
                    <h1 className = "text-4xl md:text-5xl text-yellow-400">STEVEN SHANNON</h1>
                    <p>a Computer Science Student @ Drexel University,</p>
                    <p>& IT Generalist @ Aramark</p>
                    <span className = "mt-8 flex flex-row flex-nowrap items-center justify-evenly">
                        <a href = "" target = "_blank">
                            <svg className = "h-8 w-8 md:h-12 md:w-12 stroke-white" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.144" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"></path></g></svg>
                        </a>

                        <a href = "" target = "_blank">
                            <svg className = "h-8 w-8 md:h-12 md:w-12 stroke-white" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"  stroke="#ffffff" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"></path> <rect x="-8.5" y="348.4" width="49.9" height="159.7"></rect> <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path> <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path> </g> </g></svg>
                        </a>

                        
                        <a href = "" target = "_blank">
                            {/* <svg fill="#ffffff" width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M911.36 512.512c0-220.848-178.804-399.872-399.36-399.872S112.64 291.664 112.64 512.512 291.444 912.384 512 912.384 911.36 733.36 911.36 512.512zm40.96 0c0 243.458-197.131 440.832-440.32 440.832S71.68 755.97 71.68 512.512 268.811 71.68 512 71.68s440.32 197.374 440.32 440.832z"></path><path d="M729.387 512.512c0-222.343-100.458-399.872-217.385-399.872S294.617 290.169 294.617 512.512c0 222.343 100.458 399.872 217.385 399.872s217.385-177.529 217.385-399.872zm40.96 0c0 241.961-112.535 440.832-258.345 440.832S253.657 754.473 253.657 512.512c0-241.961 112.535-440.832 258.345-440.832s258.345 198.871 258.345 440.832z"></path><path d="M95.383 532.992h832.543c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H95.383c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"></path><path d="M491.52 92.387V932.64c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V92.387c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path></g></svg> */}
                        </a>

                        
                        <a href = "" target = "_blank">
                            <svg className = "h-8 w-8 md:h-12 md:w-12 stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="0.768" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="0.768" stroke-linecap="round"></rect> </g></svg>
                        </a>
                    </span>
                </div>

                <div>

                </div>
            </section>

            <section id = "work-section" className = "bg-red-100">
            </section>

            <section id = "project-section" className = "bg-blue-50">
            </section>
        </div>
    )
}