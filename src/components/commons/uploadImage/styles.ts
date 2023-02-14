import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 30px;
`;

export const ButtonPicker = styled.TouchableOpacity`
  z-index: 9;
  /* width: 55px;
  height: 55px; */
  position: absolute;
`;

export const ButtonPickerAfter = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 999px;
`;

export const AvatarContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dotted rgba(255, 255, 255, 0.2);
  width: 60px;
  height: 60px;
  border-radius: 999px;
`;

export const IconContainer = styled(Icon)`
  color: rgba(255, 255, 255, 0.9);
`;

export const AvatarContentBefore = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #47D814;
  border-radius: 999px;
  padding: 2px;
`;
