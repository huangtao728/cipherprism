import React, { useState } from 'react';
import {
    Anchor,
    Badge,
    Breadcrumbs,
    Button,
    Group,
    useMantineTheme,
} from '@mantine/core';
import { Click, Fence, WritingSign } from 'tabler-icons-react';
import { Logo } from '../components/Logo';
import { LinkHref } from '../components/LinkHref';
import { NavTitle } from '../components/NavTitle';
import { NavBox } from '../components/NavBox';

export default function AppShellDemo() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const items = [[
        { title: 'SM2 Keypairs', description: 'Generate Public & Private keys of SM2 algorithm', href: '/init_sm2', tags: 'SM2, Server-Side' },
        { title: 'SM4 Hex Keys', description: 'Convert string to 128-bits hex keys of SM4', href: '/hexkey_sm4', tags: 'SM4, Client-Side' },
    ],[
        { title: 'SM2 Encrypt', description: 'File & Text Encrypt using SM2', href: '/encrypt_sm2', tags: 'SM2, Server-Side' },
        { title: 'SM2 Decrypt (Unavailable)', description: 'File & Text Decrypt using SM2', href: '/decrypt_sm2', tags: 'SM2, Client-Side' },
        { title: 'SM4 Encrypt', description: 'File & Text Encrypt using SM4', href: '/encrypt_sm4', tags: 'SM4, Server-Side' },
        { title: 'SM4 Decrypt (Unavailable)', description: 'File & Text Decrypt using SM4', href: '/decrypt_sm4', tags: 'SM4, Client-Side' },
    ],[
        { title: 'SM3 Signing', description: 'Sign File & Text using SM3', href: '/sign_sm3', tags: 'SM3, Server-Side' },
        { title: 'SM3 Sign-Verify', description: 'Verify SM3 Signature', href: '/verify_sm3', tags: 'SM3, Client-Side' },
    ]]

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

                <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl min-w-full">
                    <div className="md:flex rounded-lg shadow appearance-none border m-2">

                        <div className="p-5">
                            <Group spacing="xs">
                                <span>🎉</span>
                                <p
                                    className="block text-lg leading-tight font-medium text-black font-['Outfit']"
                                >
                                    Welcome to CipherPrism
                                </p>
                                <Badge color="pink" className="select-none">Beta</Badge>
                            </Group>

                            <p className="mt-2 text-slate-500 font-['Plus_Jakarta_Sans']">
                                CipherPrism is a toolkit that helps you encrypt and sign files or texts
                            </p>
                            <div className="flex flex-col">
                                <LinkHref title="GitHub Repository" href="https://github.com/huangtao728/cipherprism" className="pt-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 mt-2">
                    <NavTitle title="Initialization" description="Generate keypairs and more" icon={<Click />} />
                    <NavBox items={items[0]} />
                </div>
                <div className="px-2 mt-2">
                    <NavTitle title="Encryption" description="Encrypt & Decrypt" icon={<Fence />} />
                    <NavBox items={items[1]} />
                </div>
                <div className="px-2 mt-2">
                    <NavTitle title="Signature" description="Sign & Verify" icon={<WritingSign />} />
                    <NavBox items={items[2]} />
                </div>
            </div>


        </div>
    );
}