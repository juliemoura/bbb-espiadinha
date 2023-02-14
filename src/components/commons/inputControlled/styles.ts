import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Container = styled.View`
  width: 100%;
  display: flex;
`;

export const Input = styled.TextInput`
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #ffffff;
  padding: 15px 20px;
  border-radius: 999px;
`;

export const Label = styled.Text`
  color: #dcdcdc;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const InputContent = styled.View`
  margin: 30px 0 0 0;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  border-radius: 999px;
  background-color: #ffffff;
  width: 50%;
  position: absolute;
  top: 250px;
  left: 100px;
`;

export const ButtonTitle = styled.Text`
  color: #080808;
  font-size: 16px;
  font-weight: bold;
`;

export const IconContainerButton = styled(Icon)`
  color: #080808;
  padding-right: 10px;
`;

export const ErrorMessage = styled.Text`
  color: red;
`;

export const IconContainerWarning = styled(Icon)`
  color: red;
  margin-right: 5px;
`;

export const ErrorContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 20px;
  display: flex;
  width: 70%;
`;

export const SuccessMessage = styled.Text`
  color: #47D814;
  font-weight: bold;
  z-index: 5;
`;

export const ProgressContainer = styled.View`
  margin-top: 230px;
  padding: 20px;
`;