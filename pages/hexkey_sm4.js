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
function string_to_hex(string) {
    var result = '';
    for (var i=0; i<string.length; i++) {
      result += string.charCodeAt(i).toString(16);
    }
    return result;
  }

export default function App() {
    const theme = useMantineTheme();
    const [raw, setraw] = useState('');

    const doConvert = (string) => {
        let keyHexString = string_to_hex(string)
        setraw(keyHexString.slice(0,32).padEnd(32, '0'));
    }

    return (
        <PrismContainer>

            {/*Nav*/}
            <PrismHeader />
            {/*Container*/}
            <PrismApp>
                    <NavTitle title="SM4 Hex Keys" description="Convert string to 128-bits hex keys of SM4" icon={<Key />} />
                    <Divider my="sm" className="mt-0" />

                    <TextInput
                        label="String"
                        onChange={(e) => doConvert(e.target.value)}
                    />
                    <TextInput
                        label="128-bits Hex Keys"
                        value={raw}
                    />
            </PrismApp>
            {/*Footer*/}
            <PrismFooter />


        </PrismContainer>
    );
}