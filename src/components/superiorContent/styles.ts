import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 34px;
  width: 60%;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  border: 1px solid #797979;
  height: 49px;
  border-radius: 5px;
  padding: 0 20px;
  color: #FFF;
  font-size: 15px;
`;

export const IconContainer = styled(Icon)`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 15px;
  right: 20px;
`;