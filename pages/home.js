import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  Badge,
  Breadcrumbs,
  Anchor,
  useMantineTheme,
} from '@mantine/core';
import { Logo } from '../components/Logo';


export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const items = [
    { title: 'Mantine', href: '#' },
    { title: 'Mantine hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
        <div className="h-screen w-full h-full flex flex-col"
        style={{backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]}}>

        <AppShell

        className="mx-4"
        fixed

        header={
            <Header height={70} p="md" className='m-4 rounded-full'>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Logo />
            </div>
            </Header>
        }
        >
        <div className="flex flex-col flex-1 py-4">
            <Breadcrumbs>{items}</Breadcrumbs>
            <Breadcrumbs separator="→">{items}</Breadcrumbs>
            <Text>Application content</Text>
        </div>
        </AppShell>
    </div>
  );
}