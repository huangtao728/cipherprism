import React, { useState } from 'react';
import {
    Button,
    Divider,
    Group,
    Center,
    Box,
    TextInput,
    Textarea,
    useMantineTheme,
} from '@mantine/core';
import { Key, Fence } from 'tabler-icons-react';
import { Logo } from '../components/Logo';
import { LinkHref } from '../components/LinkHref';
import { NavTitle } from '../components/NavTitle';
import { NavBox } from '../components/NavBox';

export default function AppShellDemo() {
    const theme = useMantineTheme();
    const [file, setFile] = useState(null);
    const [public_key, setPublicKey] = useState('');
    const [encrypted, setEncrypted] = useState('');

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setFile(i);
            let reader = new FileReader();
            reader.onload = function(){
                let text = reader.result;
                setFile(text);
            }
            reader.readAsText(i);
        }
    };

    const uploadToServer = async (event) => {
        const response = await fetch("/api/encrypt_sm2", {
            method: "POST",
            body: JSON.stringify({file_content: file, public_key}),
        });
        
        const data = await response.json();
        setEncrypted(data.encrypted);
    };
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
                    <NavTitle title="SM2 Encrypt" description="File & Text Encrypt using SM2" icon={<Fence />} />
                    <Divider my="sm" className="mt-0" />
                    <TextInput
                        label="Public Key"
                        onChange={(e) => setPublicKey(e.target.value.toString())}
                        className="mb-2"
                    />
                    <input type="file" name="myFile" onChange={uploadToClient} />
                    <Button
                        color="gray"
                        className="bg-black mb-3"
                        type="submit"
                        onClick={uploadToServer}
                    >
                        Send to server
                    </Button>

                    <Divider my="sm" label="Result" labelPosition="center" />

                    <Textarea
                        label="Encrypted"
                        value={encrypted}
                    />
                </div>
            </div>


        </div>
    );
}