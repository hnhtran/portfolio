import { IconType } from 'react-icons'

export interface Service {
    title: string,
    description: string,
    Icon: IconType
}

export interface Skill {
    name: string,
    level: string,
    Icon: IconType
}

export interface Project {
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: Category[],
    key_techs: string[],
    showDetail: boolean
}

export type Category = 'all' | 'django' | 'react' | 'express' | 'canvas' | 'vanilla js'