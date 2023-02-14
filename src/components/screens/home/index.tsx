import { useState } from "react";
import Tag from "../../commons/tag";
import InProgress from "../../inProgress";
import Participants from "../../participants";
import Status from "../../status";
import { Container, ExternalContainer, IconContainer, Title, StyledView } from "./styles";

const HomeScreen = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(1);

  return (
    <ExternalContainer>
      <Container horizontal={true} showsHorizontalScrollIndicator={false}>
        <StyledView>
          <Tag onPress={() => setSelectedButton(1)}
            selected={selectedButton === 1}>
            <IconContainer name="history" size={15} selected={selectedButton === 1} />
            <Title
              selected={selectedButton === 1}>Recentes</Title>
          </Tag>
        </StyledView>
        <StyledView>
          <Tag onPress={() => setSelectedButton(2)}
            selected={selectedButton === 2}>
            <IconContainer name="angle-right" size={15} selected={selectedButton === 2} />
            <Title
              selected={selectedButton === 2}>Status</Title>
          </Tag>
        </StyledView>
        <StyledView>
          <Tag onPress={() => setSelectedButton(3)}
            selected={selectedButton === 3}>
            <IconContainer name="users" size={15} selected={selectedButton === 3} />
            <Title
              selected={selectedButton === 3}>Participantes</Title>
          </Tag>
        </StyledView>
      </Container>
      <StyledView>
        {selectedButton === 1 && <InProgress />}
        {selectedButton === 2 && <Status />}
        {selectedButton === 3 && <Participants />}
      </StyledView>
    </ExternalContainer>
  );
};

export default HomeScreen;
