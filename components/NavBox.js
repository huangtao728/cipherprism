import { Avatar, Text } from '@mantine/core';
import { Tags } from 'tabler-icons-react';
import Link from 'next/link';

// const items = [
//     { title: 'SM2 Keypairs', description: 'Public & Private keys of SM2 algorithm', href: '/init_sm2', tags: 'SM2, Server-Side' },
//     { title: 'SM4 Hex Keys', description: 'Convert string to 128-bits hex keys of SM4', href: '/hexkey_sm4', tags: 'SM4, Client-Side' },
// ]



export function NavBox(props) {
    const { items } = props

    const stru = items.map((item, index) => (
        <Link
            href={item.href}
            className="rounded-lg border h-border transition-all duration-500 p-4 cursor-pointer flex flex-col justify-between relative" >
            <>
                <div className="border border-slate-900/10 rounded-lg p-3">
                    <h1 className="text-base font-['Outfit'] flex flex-row items-center space-x-1">
                        <span>{item.title}</span>
                    </h1>
                    <p className="text-xs text-black/80 md:truncate font-light font-['Plus_Jakarta_Sans']">
                        {item.description}
                    </p>
                    <div className="flex flex-row items-center border-t mt-5 pt-1 pb-1">
                        <Tags size={16} strokeWidth={1} className="mr-1"/>
                        <span className="text-xs text-black/80 md:truncate font-light font-['Plus_Jakarta_Sans']">{item.tags}</span>
                    </div>
                </div>
            </>
        </Link>
    ))

    return (
        <div className="my-1 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {stru}
        </div>
    )
}