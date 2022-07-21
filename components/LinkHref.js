import { Avatar, Text } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';

export function LinkHref(props) {
    const {title, href, className=""} = props
    return (
        <>
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`${className} group text-blue-500 w-fit font-['Outfit'] font-light`}
            >
                {title}
                <ArrowRight
                    className="w-4 h-4 ml-1 align-middle -mt-0.5 transition-transform ease-in-out group-hover:translate-x-1 md inline-block"
                    style={{ visibility: 'inherit' }}
                />
            </a>
        </>
    )
}