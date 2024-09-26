import React from "react";
import "./About.scss";
import { FaDownload } from "react-icons/fa";
import Info from "../../Components/Info/Info";
import Stats from "../../Components/Stats/Stats";
import Skills from "../../Components/Skills/Skills";
import { resume } from "../../data";
import ResumeItem from "../../Components/ResumeItem/ResumeItem";


function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href="" className="button link">
              Download CV{" "}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separater"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separater"></div>

      <div className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Education
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {
              resume.map((val)=>{
                if(val.category === "experience"){
                  return <ResumeItem key={val.id} {...val} />
                }
              })
            }
          </div>
          <div className="resume__data">
            {
              resume.map((val)=>{
                if(val.category === "education"){
                  return <ResumeItem key={val.id} {...val} />
                }
              })
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
