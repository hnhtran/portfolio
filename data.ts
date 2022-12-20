import { FaReact, FaFigma, FaPython, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { Service, Skill } from './type'
import { SiDjango, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import { DiJavascript } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'

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
]