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
    const [raw, setraw] = useState('');
    const [public_key, setPublicKey] = useState('');
    const [private_key, setPrivateKey] = useState('');
    const [hash, setHash] = useState('');
    const [signature, setSignature] = useState('');
    const [encrypted, setEncrypted] = useState('');
    const [exported, setExported] = useState('');

    const doGenerate = () => {
        const sm2 = require('sm-crypto').sm2

        let keypair = sm2.generateKeyPairHex()

        let public_key = keypair.publicKey // 公钥
        let private_key = keypair.privateKey // 私钥

        const data = {
            public_key: public_key,
            private_key: private_key
        }
        setraw(data);
        setPublicKey(public_key);
        setPrivateKey(private_key);
    }

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
        const response = await fetch("/api/all_in_sm2", {
            method: "POST",
            body: JSON.stringify({ file_content: file, public_key, private_key }),
        });

        const data = await response.json();
        setHash(data.hash);
        setSignature(data.signature);
        setEncrypted(data.encrypted);
        setExported(JSON.stringify({ file, public_key, signature }));
    };
    return (
        <PrismContainer>

            {/*Nav*/}
            <PrismHeader />
            {/*Container*/}
            <PrismApp>
                    <NavTitle title="Encrypt & Sign" description="Encrypt & Sign using SM2" icon={<Fence />} />
                    <Divider my="sm" className="mt-0" />
                    <Button onClick={doGenerate} color="gray" className="bg-black mb-3">
                        Get
                    </Button>
                    <TextInput
                        label="Public Key"
                        value={raw.public_key}
                    />
                    <TextInput
                        label="Private Key"
                        value={raw.private_key}
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
                    <TextInput
                        label="Hash"
                        value={hash}
                        className="mb-2"
                    />
                    <TextInput
                        label="Signature"
                        value={signature}
                        className="mb-2"
                    />
                    <Textarea
                        label="Encrypted"
                        value={encrypted}
                        className="mb-2"
                    />
                    <Textarea
                        label="Exported"
                        value={exported}
                    />
            </PrismApp>
            {/*Footer*/}
            <PrismFooter />


        </PrismContainer>
    );
}