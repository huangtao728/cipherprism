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
import { PrismContainer, PrismHeader, PrismApp, PrismFooter, Logo, LinkHref, NavTitle, NavBox } from '../components';

export default function App() {
    const theme = useMantineTheme();
    const [raw, setraw] = useState('');

    const fetchApi = async (url) => {
        const response = await fetch('/api/keypair_init_sm2');
        const data = await response.json();
        setraw(data);
    }

    return (
        <PrismContainer>

            {/*Nav*/}
            <PrismHeader />
            {/*Container*/}
            <PrismApp>
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
            </PrismApp>
            {/*Footer*/}
            <PrismFooter />

        </PrismContainer>
    );
}