import { Avatar, Text } from '@mantine/core';
import { Pyramid } from 'tabler-icons-react';

export function Logo() {
    
  return (
    <>
      <Avatar color="cyan" radius="xl" className="align-middle mr-3">
        <Pyramid color='black' /> 
      </Avatar>
      <Text
      weight={700}
      style={{ fontFamily: 'Philosopher, sans-serif', fontSize: '26px' }}
      className="leading-9 subpixel-antialiased cursor-default select-none underline decoration-transparent transition-all ease-in-out hover:decoration-indigo-500"
      >
        CipherPrism
      </Text>
    </>
  );
}