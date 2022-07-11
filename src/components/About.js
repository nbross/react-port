import React from "react";
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm <span className='text-secondary'>Nick Bross.</span>
                        <br className="hidden lg:inline-block" />Web Developer in the works.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    As a Web Developer, I love to create beautiful and functional Web Apps. I originally started my Web Development journey when I enrolled in Case Western Reserve University's Coding Bootcamp. I hope to soon land a tech job and further my career in this field.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Check out My Projects!
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./N1.png"
                    />
                </div>
            </div>
        </section>
    );
}