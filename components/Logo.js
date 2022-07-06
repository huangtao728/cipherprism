import { Avatar, Text } from '@mantine/core';
import { Pyramid } from 'tabler-icons-react';

export function Logo() {
    
  return (
    <>
      <Avatar color="cyan" radius="xl" className="mr-3">
        <Pyramid color='black' /> 
      </Avatar>
      <Text
      weight={700}
      style={{ fontFamily: 'Philosopher, sans-serif' }}
      className="text-3xl"
      >
        CipherPrism
      </Text>
    </>
  );
}