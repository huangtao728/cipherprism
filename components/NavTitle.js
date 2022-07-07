import { Avatar, Text } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';

export function NavTitle(props) {
    const { title, description, icon } = props
    return (
        <div className="py-4 text-center md:text-left">
            <h1
                className="text-lg font-bold flex flex-col md:flex-row justify-center md:justify-start items-center space-x-1 font-['Outfit']"
            >
                {icon}
                <span className="text-xl text-black">{title}</span>
            </h1>
            <p className="text-base font-extralight pl-0.5 font-['Plus_Jakarta_Sans'] ">
                {description}
            </p>
        </div>
    )
}
