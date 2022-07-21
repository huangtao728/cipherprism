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
import { PrismContainer, PrismHeader, PrismApp, PrismFooter, Logo, LinkHref, NavTitle, NavBox } from '../components';

export default function App() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const items = [[
        { title: 'SM2 Keypairs', description: 'Generate Public & Private keys of SM2 algorithm', href: '/init_sm2', tags: 'SM2, Server-Side' },
        { title: 'SM4 Hex Keys', description: 'Convert string to 128-bits hex keys of SM4', href: '/hexkey_sm4', tags: 'SM4, Client-Side' },
        { title: 'SM3 Hash', description: 'Calculate File & Text Hash using SM3', href: '/hash_sm3', tags: 'SM3, Client-Side' },
    ],[
        { title: 'Encrypt & Sign', description: 'Encrypt & Sign using SM2', href: '/all_in_sm2', tags: 'All-in-one, SM2' },
        { title: 'SM2 Encrypt', description: 'File & Text Encrypt using SM2', href: '/encrypt_sm2', tags: 'SM2, Server-Side' },
        { title: 'SM2 Decrypt (Unavailable)', description: 'File & Text Decrypt using SM2', href: '/decrypt_sm2', tags: 'SM2, Client-Side' },
        { title: 'SM4 Encrypt', description: 'File & Text Encrypt using SM4', href: '/encrypt_sm4', tags: 'SM4, Server-Side' },
        { title: 'SM4 Decrypt (Unavailable)', description: 'File & Text Decrypt using SM4', href: '/decrypt_sm4', tags: 'SM4, Client-Side' },
    ],[
        { title: 'Signature Verify', description: 'Verify the SM2 signature', href: '/all_verify_sm2', tags: 'All-in-one, SM2' },
        { title: 'SM2 Signing', description: 'Sign File & Text using SM2', href: '/sign_sm2', tags: 'SM2, Server-Side' },
        { title: 'SM2 Sign-Verify (Unavailable)', description: 'Verify SM2 Signature', href: '/verify_sm2', tags: 'SM2, Client-Side' },
    ]]

    return (
        <PrismContainer>

            {/*Nav*/}
            <PrismHeader />
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


        </PrismContainer>
    );
}