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
    const [private_key, setPrivateKey] = useState('');
    const [signature, setSignature] = useState('');

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
        const response = await fetch("/api/sign_sm2", {
            method: "POST",
            body: JSON.stringify({file_content: file, private_key}),
        });
        
        const data = await response.json();
        setSignature(data.signature);
    };
    return (
        <PrismContainer>

            {/*Nav*/}
            <PrismHeader />
            {/*Container*/}
            <PrismApp>
                    <NavTitle title="SM2 Signing" description="Sign File & Text using SM2" icon={<WritingSign />} />
                    <Divider my="sm" className="mt-0" />
                    <TextInput
                        label="Private Key"
                        onChange={(e) => setPrivateKey(e.target.value.toString())}
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
                        label="Signature"
                        value={signature}
                    />
            </PrismApp>
            {/*Footer*/}
            <PrismFooter />


        </PrismContainer>
    );
}