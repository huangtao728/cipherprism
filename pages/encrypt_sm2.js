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
import { PrismContainer, PrismHeader, PrismApp, PrismFooter, Logo, LinkHref, NavTitle, NavBox } from '../components';
export default function App() {
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
        <PrismContainer>

            {/*Nav*/}
            <PrismHeader />
            {/*Container*/}
            <PrismApp>
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
            </PrismApp>
            {/*Footer*/}
            <PrismFooter />


        </PrismContainer>
    );
}