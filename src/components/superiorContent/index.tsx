import { Container, Title, Input, IconContainer } from "./styles";

const SuperiorContent = () => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar por..."
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
      />
      <IconContainer name="search1" size={20} />
    </Container>
  );
};

export default SuperiorContent;
