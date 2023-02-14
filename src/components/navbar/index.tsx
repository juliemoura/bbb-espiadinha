import { useEffect, useState } from "react";
import UploadImage from "../commons/uploadImage";
import { Container, Content, Title, Name, Icon } from "./styles";

interface INavbar {
  name: string;
  lastName: string;
};

const Navbar = ({ name, lastName}: INavbar) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Bom dia!");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Boa tarde!");
    } else {
      setGreeting("Boa noite!");
    }
  }, []);

  return (
    <Container>
      <Content>
        <Title>{greeting}</Title>
        <Name>{name} {lastName}</Name>
      </Content>
      <Icon>
        <UploadImage />
      </Icon>
    </Container>
  );
};

export default Navbar;
