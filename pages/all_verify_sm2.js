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
import { PrismContainer, Logo, LinkHref, NavTitle, NavBox } from '../components';
import { Cipher } from 'crypto';


export default function AppShellDemo() {
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
            
                </div>
            </div>


        </PrismContainer>
    );
}