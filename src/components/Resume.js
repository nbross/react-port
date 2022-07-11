import React from "react";
import { IdentificationIcon, DownloadIcon } from "@heroicons/react/solid";

export default function Resume() {
    return (
        <section id="testimonials">
            <div className="container px-10 py-10 mx-auto text-center">
                <IdentificationIcon className="w-10 inline-block mb-4 text-secondary" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-10">
                    Resume
                </h1>
                <div className="flex flex-wrap m-8">
                        <div className="p-2 md:w-1/1 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded-full">
                                <p className="leading-relaxed mb-4 text-2xl">This is a button that will take you to my awesome resume!</p>
                                <div className="inline-flex items-center">
                                    <a href="https://drive.google.com/file/d/1w3ophRG9mrC7jxg73YqGQ73un2lo_Ctz/view?usp=sharing" className="bg-secondary rounded-full text-5xl p-2 text-white"> Resume<DownloadIcon className="w-14 inline-block mb-2" />  </a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}