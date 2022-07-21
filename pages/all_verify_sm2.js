import React, { useState } from 'react';
import {
    Button,
    Divider,
    Group,
    Center,
    Badge,
    TextInput,
    Textarea,
    useMantineTheme,
} from '@mantine/core';
import { Key, Fence, WritingSign } from 'tabler-icons-react';
import { PrismContainer, PrismHeader, PrismApp, PrismFooter, Logo, LinkHref, NavTitle, NavBox } from '../components';import { Cipher } from 'crypto';


export default function App() {
    const theme = useMantineTheme();
    const [file, setFile] = useState(null);
    const [validity, setValidity] = useState(0);
    const [exported, setExported] = useState('');

    const validityColor = ["dark", "green", "red"]
    const validityFlag = ["STANDBY", "Valid", "Invalid"]

    function sm3_digest(string) {
        const sm3 = require('sm-crypto').sm3
        return sm3(string)
    }

    function sm2_verify(public_key, signature, msg) {
        const sm2 = require('sm-crypto').sm2
        return sm2.doVerifySignature(msg, signature, public_key)
    }


    const doValidate = (exported) => {
        var data = JSON.parse(exported)
        const sm2 = require('sm-crypto').sm2

        let curr_hash = sm3_digest(data.file)
        
        const validMap = [2, 1]
        if(sm2_verify(data.public_key, data.signature, curr_hash))
            setValidity(1)
        else
            setValidity(2)
    }

    return (
        <PrismContainer>

            {/*Nav*/}
            <PrismHeader />
            {/*Container*/}
            <PrismApp>
                    <NavTitle title="Signature Verify" description="Verify the SM2 signature" icon={<WritingSign />} />
                    <Divider my="sm" className="mt-0" />
                    <Textarea
                        label="Exported"
                        value={exported}
                        onChange={(e) => setExported(e.target.value)}
                        className="mb-2"
                    />
                    <Button
                        color="gray"
                        className="bg-black mb-3 float-left"
                        type="submit"
                        onClick={() => doValidate(exported)}
                    >
                        Verify
                    </Button>
                    <Badge color={validityColor[validity]} size="xl" variant="dot" className="float-right select-none">
                        {validityFlag[validity]}
                    </Badge>
            
            </PrismApp>
            {/*Footer*/}
            <PrismFooter />


        </PrismContainer>
    );
}