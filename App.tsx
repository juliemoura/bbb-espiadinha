import React, { useState } from "react";

import { BBBTheme } from "./themes/BBBTheme";
import { ThemeProvider } from "styled-components";

import Navbar from "./src/components/navbar";
import FooterNavbar from "./src/components/footerNavbar";

import { Container, InternalContainer } from "./global/styles";

const AppRootComponent = () => {
  const [name, setName] = useState('JM');
  const [lastName, setLastName] = useState('');

  const handleSave = (newName: string, newLastName: string) => {
      setName(newName);
      setLastName(newLastName);
    };
    
  return (
    <Container>
      <InternalContainer>
        <ThemeProvider theme={BBBTheme}>
          <Navbar name={name} lastName={lastName}/>
        </ThemeProvider>
      </InternalContainer>
      <FooterNavbar onSave={handleSave}/>
    </Container>
  );
}

AppRootComponent.displayName = 'AppRootComponent';

export default AppRootComponent;