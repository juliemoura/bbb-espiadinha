import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { IStyledButton } from "../../commons/tag/styles";

export const ExternalContainer = styled.View``;

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: row;
  padding: 20px;
  overflow-x: scroll;
  width: 100%;
`;

export const StyledView = styled.View``;

export const IconContainer = styled(Icon)<IStyledButton>`
  color: ${(props: { selected: boolean }) =>
    props.selected ? "#FFF" : "#797979"};
`;

export const Title = styled.Text<IStyledButton>`
  color: ${(props: { selected: boolean }) =>
    props.selected ? "#FFF" : "#797979"};
  font-size: 18px;
  padding-left: 5px;
`;
