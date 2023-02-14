import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

interface IStyledButton {
  selected: boolean;
}

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 30px 30px;
  background-color: #282727;
  width: 100%;
  position: absolute;
  bottom: -60px;
  z-index: 2;
`;

export const Name = styled.Text<IStyledButton>`
  color: ${(props: { selected: boolean }) =>
    props.selected ? "#FFF" : "rgba(255,255,255,0.2)"};
  font-size: 14px;
`;

export const ContentName = styled.TouchableOpacity<IStyledButton>`
  display: flex;
  align-items: center;
  // padding-top: 10px;
  transform: ${(props: { selected: boolean }) =>
    props.selected ? "scale(1.05)" : "scale(1)"};
  transition: ease-in-out;
`;

export const IconContainer = styled(Icon)<IStyledButton>`
  color: ${(props: { selected: boolean }) =>
    props.selected ? "#FFF" : "rgba(255,255,255,0.2)"};
  padding-bottom: 10px;
`;

export const ExternalContainer = styled.View``;

export const Teste = styled.View``;