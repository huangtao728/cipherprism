import React, { useState } from 'react';
import {
    Button,
    Divider,
    Group,
    Center,
    Box,
    TextInput,
    useMantineTheme,
} from '@mantine/core';
import { Key, Cloud, Browser } from 'tabler-icons-react';
import { Logo } from '../components/Logo';
import { LinkHref } from '../components/LinkHref';
import { NavTitle } from '../components/NavTitle';
import { NavBox } from '../components/NavBox';

export default function AppShellDemo() {
    const theme = useMantineTheme();
    const [raw, setraw] = useState('');

    const fetchApi = async (url) => {
        const response = await fetch('/api/keypair_init_sm2');
        const data = await response.json();
        setraw(data);
    }

    return (
        <div className="h-screen w-full h-full flex flex-col"
            style={{ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }}>

            {/*Nav*/}
            <nav className="bg-white p-2 mt-0 fixed w-full z-10 top-0 border-b border-slate-900/10">
                <div className="container mx-auto flex flex-wrap items-center">
                    <div className="flex w-full px-2 md:w-1/2 justify-center md:justify-start text-black font-extrabold">
                        <Logo />
                    </div>
                    <div className="flex w-full content-center justify-between md:w-1/2 md:justify-end">
                        {/*Sidebar*/}
                    </div>
                </div>
            </nav>
            {/*Container*/}
            <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-16 h-full p-2 pb-12">



                <div className="px-64 mt-0">
                    <NavTitle title="SM2 Keypairs" description="Generate Public & Private keys of SM2 algorithm" icon={<Key />} />
                    <Divider my="sm" className="mt-0" />

                    <Button onClick={fetchApi} color="gray" className="bg-black mb-3">
                        Get
                    </Button>
                    <TextInput
                        label="Public Key"
                        value={raw.public_key}
                    />
                    <TextInput
                        label="Private Key"
                        value={raw.private_key}
                    />
                </div>
            </div>


        </div>
    );
}