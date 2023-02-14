import React from 'react';
import HomeScreen from '../screens/home';
import Queridometro from '../screens/queridometro';
import Settings, { SettingTypes } from '../screens/settings';
import { Container, Name, ContentName, IconContainer, ExternalContainer, ContentSelected } from './styles';

const FooterNavbar = ({onSave}: SettingTypes) => {
  const [selectedButton, setSelectedButton] = React.useState<number | null>(1);

  return (
    <ExternalContainer>
      <Container>
        <ContentName onPress={() => setSelectedButton(1)} selected={selectedButton === 1}>
          <IconContainer name="home" size={20} selected={selectedButton === 1} />
          <Name selected={selectedButton === 1}>Página Inicial</Name>
        </ContentName>
        <ContentName onPress={() => setSelectedButton(2)} selected={selectedButton === 2}>
          <IconContainer name="wrench" size={20} selected={selectedButton === 2} />
          <Name selected={selectedButton === 2}>Configurações</Name>
        </ContentName>
        <ContentName onPress={() => setSelectedButton(3)} selected={selectedButton === 3}>
          <IconContainer name="laugh-beam" size={20} selected={selectedButton === 3} />
          <Name selected={selectedButton === 3}>Queridômetro</Name>
        </ContentName>
      </Container>
      <ContentSelected>
        {selectedButton === 1 && <HomeScreen />}
        {selectedButton === 2 && <Settings onSave={onSave} />}
        {selectedButton === 3 && <Queridometro />}
      </ContentSelected>
    </ExternalContainer>
  );
};

export default FooterNavbar;
