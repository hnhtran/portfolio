import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'
import { FiFigma } from 'react-icons/fi'
import { Service } from './type'
export const services:Service[] = [
    {
        title: 'Frontend Development',
        description: 'I can build a beautiful and scalable SPA using <b> HTML, Javascript </b> and <b> React </b> ',
        Icon: RiComputerLine
    },
    {
        title: 'Backend Development',
        description: 'handle database, server, api using <b> Express, Django </b>',
        Icon: FaServer
    },
    {
        title: 'API Development',
        description: 'I can develop robust REST API using <b> Django REST framework </b> & <b> Node.js </b>',
        Icon: AiOutlineApi
    },
    {
        title: 'UI/UX Design',
        description: 'stunning user interface using <b> Figma </b>',
        Icon: FiFigma
    }
]