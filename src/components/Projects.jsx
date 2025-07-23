import React from "react";
import { useTranslation } from "react-i18next";
import Image1 from '../assets/images/projectImages/p1_2.jpg'
import Image2 from '../assets/images/projectImages/p2_2.jpg'
import Image3 from '../assets/images/projectImages/p3_2.jpg'
import Image4 from '../assets/images/projectImages/p4_1.png'
import Image5 from '../assets/images/projectImages/p5_1.png'
import Image6 from '../assets/images/projectImages/p6_2.jpeg'
import Image7 from '../assets/images/projectImages/p7_1.jpg'
import Image8 from '../assets/images/projectImages/p8_1.jpg'
import Image9 from '../assets/images/projectImages/p9_1.jpg'
import Image10 from '../assets/images/projectImages/p10_1.jpg'
import Image11 from '../assets/images/projectImages/p11_1.jpg'
import Image12 from '../assets/images/projectImages/p12_1.jpg'
import Image13 from '../assets/images/projectImages/p13_1.jpg'
import Image14 from '../assets/images/projectImages/p14_1.jpg'
import Image15 from '../assets/images/projectImages/p15_2.png'
import Image16 from '../assets/images/projectImages/p16_1.jpg'
import Image17 from '../assets/images/projectImages/p17_1.jpg'


import ProjectCard from "./ProjectCard";

const Projects = () => {
    const { t } = useTranslation();

    const projectCards = [
        {
            image: Image1,
            title: t("projects.project1"),
            description: t("projects.description1"),
        },
        {
            image: Image2,
            title: t("projects.project2"),
            description: t("projects.description1"),
        },
        {
            image: Image3,
            title: t("projects.project3"),
            description: t("projects.description2"),
        },
        {
            image: Image4,
            title: t("projects.project4"),
            description: t("projects.description1"),
        },
        {
            image: Image5,
            title: t("projects.project5"),
            description: t("projects.description1"),
        },
        {
            image: Image6,
            title: t("projects.project6"),
            description: t("projects.description1"),
        },
        {
            image: Image7,
            title: t("projects.project7"),
            description: t("projects.description1"),
        },
        {
            image: Image8,
            title: t("projects.project8"),
            description: t("projects.description1"),
        },
        {
            image: Image9,
            title: t("projects.project9"),
            description: t("projects.description1"),
        },
        {
            image: Image10,
            title: t("projects.project10"),
            description: t("projects.description1"),
        },
        {
            image: Image11,
            title: t("projects.project11"),
            description: t("projects.description1"),
        },
        {
            image: Image12,
            title: t("projects.project12"),
            description: t("projects.description1"),
        },
        {
            image: Image13,
            title: t("projects.project13"),
            description: t("projects.description1"),
        },
        {
            image: Image14,
            title: t("projects.project14"),
            description: t("projects.description1"),
        },
        {
            image: Image15,
            title: t("projects.project15"),
            description: t("projects.description1"),
        },
        {
            image: Image16,
            title: t("projects.project16"),
            description: t("projects.description1"),
        },
        {
            image: Image17,
            title: t("projects.project17"),
            description: t("projects.description1"),
        },
    ];

    return (
        <section id='projects' className="max-w-screen-3xl container bg-gradient-to-tr from-main2 to-main mx-auto flex flex-col items-center pt-16 z-0">
            <h2 className="text-4xl font-rubik font-bold text-center mb-8 uppercase text-white">{t("projectsSectionTitle")}</h2>
            <div className="w-[50px] h-[6px] bg-[#6484CD] mb-12"></div>
            <div className="max-w-screen-xl mb-12 flex flex-row flex-wrap lg:flex-row items-center lg:items-start justify-center">
                {projectCards.map((projectCard, index) => (
                    <ProjectCard t={t} projectID={index+1} image={projectCard.image} title={projectCard.title} description={projectCard.description} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
