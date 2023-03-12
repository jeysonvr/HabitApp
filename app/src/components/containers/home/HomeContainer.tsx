import React from 'react'

interface HomeContainerProps {
  userName: string;
};

const HomeContainer = ({ userName }: HomeContainerProps) => {
  return (
    <div>Hola, userName</div>
  )
}

export default HomeContainer
