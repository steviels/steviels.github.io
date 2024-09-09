import "./Card.css";

function Card ({ header, shortDescription, fullDescription, images, skills, color, side }) {
    const borderAppearance = `border-${side[0]}-4 border-${side[0]}-[${color}]`;

    return (
        <div className = {"card group mx-auto w-6/12 mb-12 px-2 py-2 border-solid " + borderAppearance}>
            { header.split("|").map(head => (<h3>{ head }</h3>)) }
            <p>{ shortDescription }</p>

            <ul className = "card-full-description list-disc mt-4 pl-2 text-xs leading-none">
                <li className = "list-none text-center text-xs group-hover:opacity-0 group-hover:text-[0rem]">Hover to expand</li>

                {
                    fullDescription.map(bullet => (
                        <li className = "italic opacity-0 text-[0rem] group-hover:opacity-100 group-hover:text-xs">{bullet}</li>
                    ))
                }
            </ul>

            <ul className = "list-none mt-4 pl-2 text-sm flex flex-row flex-wrap justify-center">
                {
                    skills.map(bullet => (
                        <li className = {`inline-block mx-0.5 my-0.5 px-2.5 py-1 bg-[${color}] rounded-3xl`}>{bullet}</li>
                    ))
                }
            </ul>
        </div>
    );
}

function WorkCard ({ year, company, position, fullDescription, skills}) {
    return (
        <div className = "card group mx-auto w-6/12 mb-12 px-2 py-2 border-solid border-l-4 border-l-[#f007] transition duration-500 hover:border-l-[#f00]">
            <h3>{ year }</h3>
            <h3>{ company + ", " + position }</h3>

            <ul className = "card-full-description list-disc mt-4 pl-4 text-sm leading-none">
                <li className = "list-none text-center group-hover:opacity-0 group-hover:text-[0rem]">Hover to expand</li>

                {
                    fullDescription.map(bullet => (
                        <li className = "italic opacity-0 text-[0rem] group-hover:opacity-100 group-hover:text-sm">{bullet}</li>
                    ))
                }
            </ul>

            <ul className = "list-none mt-4 pl-2 text-sm flex flex-row flex-wrap justify-center">
                {
                    skills.map(bullet => (
                        <li className = {`inline-block mx-0.5 my-0.5 px-2.5 py-1 bg-[#f007] rounded-3xl`}>{bullet}</li>
                    ))
                }
            </ul>
        </div>
    );
}

function ProjectCard({ title, shortDescription, fullDescription, skills }) {
    return (
        <div className = "card group mx-auto w-6/12 mb-12 px-2 py-2 border-solid border-r-4 border-r-[#0000c866] transition duration-500 hover:border-r-[#0000c8]">
            <h3>{ title }</h3>
            <p>{ shortDescription }</p>

            { fullDescription.length > 0 && 
                <ul className = "card-full-description list-disc mt-4 pl-2 text-sm leading-none">
                    <li className = "list-none text-center group-hover:opacity-0 group-hover:text-[0rem]">Hover to expand</li>

                    {
                        fullDescription.map(bullet => (
                            <li className = "italic opacity-0 text-[0rem] group-hover:opacity-100 group-hover:text-sm">{bullet}</li>
                        ))
                    }
                </ul>
            }

            <ul className = "list-none mt-4 pl-2 text-sm flex flex-row flex-wrap justify-center">
                {
                    skills.map(bullet => (
                        <li className = {`inline-block mx-0.5 my-0.5 px-2.5 py-1 bg-[#0000c866] rounded-3xl`}>{bullet}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export { WorkCard, ProjectCard };