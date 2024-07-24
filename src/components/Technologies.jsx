import React from 'react'
import { RiNextjsFill } from "react-icons/ri";
import { SiReact , SiDjango, SiMongodb, SiJavascript, SiTypescript, SiFastapi, SiStreamlit } from "react-icons/si";
import { FaPython, FaAws, FaPhp, FaDocker, FaJenkins } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  return (
    <div id="technologies" className="container mx-auto border-b bg-base-200 border-base-300 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <SiReact className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <RiNextjsFill className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <SiDjango className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <SiMongodb className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <BiLogoPostgresql className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <FaPython className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <FaAws className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <SiJavascript className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <SiTypescript className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <FaPhp className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <FaDocker className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <FaJenkins className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <SiFastapi className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-2 border-base-100 p-4">
            <SiStreamlit className="text-7xl"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
