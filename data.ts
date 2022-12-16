import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { Service } from './type'
import { SiDjango } from 'react-icons/si'
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