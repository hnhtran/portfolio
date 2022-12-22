import { FaJava, FaAws, FaReact, FaFigma, FaPython, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { Service, Skill } from './type'
import { SiDotnet, SiMicrosoftazure, SiDjango, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import { DiJavascript } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { TbCSharp } from 'react-icons/tb'

export const services:Service[] = [
    {
        title: 'Frontend Development',
        description: 'build SPA using <b> HTML, CSS </b> and <b> React </b> ',
        Icon: FaReact
    },
    {
        title: 'Backend Development',
        description: 'handle database, server, api using <b> Express, Django </b>',
        Icon: SiDjango
    },
    {
        title: 'API Development',
        description: 'develop REST API using <b> Django REST framework </b> & <b> Node.js </b>',
        Icon: FaNodeJs
    },
    {
        title: 'UI/UX Design',
        description: 'design user interface with <b> Figma </b>',
        Icon: FaFigma
    }
]

export const toolsFramework:Skill[] = [
    {
        name: 'Django',
        level: '60%',
        Icon: SiDjango
    },
    // {
    //     name: '.NET',
    //     level: '30%',
    //     Icon: SiDotnet
    // },
    {
        name: 'React',
        level: '80%',
        Icon: FaReact
    },
    {
        name: 'Express',
        level: '90%',
        Icon: SiExpress
    },
    {
        name: 'MongoDb',
        level: '60%',
        Icon: SiMongodb
    },
    {
        name: 'PostgreSQL',
        level: '60%',
        Icon: SiPostgresql
    },
    {
        name: 'Figma',
        level: '50%',
        Icon: FaFigma
    },
    {
        name: 'AWS',
        level: '30%',
        Icon: FaAws
    },
    // {
    //     name: 'Azure',
    //     level: '30%',
    //     Icon: SiMicrosoftazure
    // }
]

export const languages:Skill[] = [
    {
        name: 'Python',
        level: '60%',
        Icon: FaPython
    },
    {
        name: 'JavaScript',
        level: '80%',
        Icon: DiJavascript
    },
    {
        name: 'TypeScript',
        level: '40%',
        Icon: SiTypescript
    },
    {
        name: 'HTML',
        level: '90%',
        Icon: FaHtml5
    },
    {
        name: 'CSS',
        level: '80%',
        Icon: FaCss3
    },
    {
        name: 'TailwindCSS',
        level: '60%',
        Icon: SiTailwindcss
    },
    {
        name: 'Node.js',
        level: '50%',
        Icon: FaNodeJs
    },
    {
        name: 'C#',
        level: '30%',
        Icon: TbCSharp
    },
    {
        name: 'Java',
        level: '30%',
        Icon: FaJava
    }
]

export const projects:Project[] = [
    {
        name: 'Snake Game',
        description: 'A simple snake game built with vanilla JavaScript and canvas',
        image_path: '/images/snake.png',
        deployed_url: 'https://canvas-snake-game-nine.vercel.app/',
        github_url: 'https://github.com/hnhtran/CanvasSnakeGame',
        category: ['canvas', 'vanilla js'],
        key_techs: ['JavaScript', 'HTML', 'CSS', 'Canvas']
    },
    {
        name: 'Crash The Language',
        description: 'A simple game built with vanilla JavaScript',
        image_path: '/images/crash-the-language.png',
        deployed_url: 'https://crash-the-languages-five.vercel.app/',
        github_url: 'https://github.com/hnhtran/Crash-the-Languages',
        category: ['vanilla js'],
        key_techs: ['JavaScript', 'HTML', 'CSS']
    },
    {
        name: 'Financial-Bookkeeping',
        description: 'A simple bookkeeping app built with express, mongodb, and liquidjs',
        image_path: '/images/financial-bookkeeping-app.png',
        deployed_url: 'https://financial-bookeeping.onrender.com',
        github_url: 'https://github.com/hnhtran/Financial-Bookeeping-App',
        category: ['express'],
        key_techs: ['JavaScript', 'Express', 'MongoDB', 'Liquidjs']
    },
    {
        name: 'InstaCats',
        description: 'A clone instagram for cat lovers built with MongoDB, Express, React, Node.js (MERN) stack',
        image_path: '/images/instacats.png',
        deployed_url: 'https://instacatjat.onrender.com/',
        github_url: 'https://github.com/hnhtran/InstaCat',
        category: ['react', 'express'],
        key_techs: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB']
    },
    {
        name: 'Trasia-watches-store',
        description: 'A watches store staff management app built with Django and React',
        image_path: '/images/trasia-watches-store.png',
        deployed_url: 'https://trasia-watches-store.onrender.com/',
        github_url: 'https://github.com/trasia-watches-store',
        category: ['django', 'react'],
        key_techs: ['Django', 'React', 'PostgreSQL']
    }
]