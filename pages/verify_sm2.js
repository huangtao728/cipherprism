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
import { Key, Fence, WritingSign } from 'tabler-icons-react';
import { PrismContainer, PrismHeader, PrismApp, PrismFooter, Logo, LinkHref, NavTitle, NavBox } from '../components';
export default function App() {
    const theme = useMantineTheme();
    const [file, setFile] = useState(null);
    const [public_key, setPublicKey] = useState('');
    const [signature, setSignature] = useState('');

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setFile(i);
            let reader = new FileReader();
            reader.onload = function () {
                let text = reader.result;
                setFile(text);
            }
            reader.readAsText(i);
        }
    };

    const uploadToServer = async (event) => {
        const response = await fetch("/api/sign_sm2", {
            method: "POST",
            body: JSON.stringify({ file_content: file, public_key, signature }),
        });

        const data = await response.json();
        setSignature(data.result);
    };
    return (
        <PrismContainer>

            {/*Nav*/}
            <PrismHeader />
            {/*Container*/}
            <PrismApp>
                    <NavTitle title="SM2 Sign-Verify" description="Verify SM2 Signature" icon={<WritingSign />} />
                    <Divider my="sm" className="mt-0" />
                    <TextInput
                        label="Public Key"
                        onChange={(e) => setPublicKey(e.target.value.toString())}
                        className="mb-2"
                    />
                    <Textarea
                        label="Signature"
                        onChange={(e) => setSignature(e.target.value.toString())}
                        className="mb-3"
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
                        label="Signature"
                        value={signature}
                    />
            </PrismApp>
            {/*Footer*/}
            <PrismFooter />


        </PrismContainer>
    );
}