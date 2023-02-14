import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

export const Container = styled.View`
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: #151515;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 999px;
  padding: 10px 35px 10px 25px;
`;

export const TitleContainer = styled.View`
  background: #272727;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 10px 20px;
  margin: 0 10px 0 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 999px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonClosed = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HiddenContainer = styled.View`
  z-index: 1;
  position: absolute;
  width: 372px;
  height: 80px;
  background: #272727;
  border-radius: 999px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 0;
`;

export const Text = styled.Text`
  color: #dcdcdc;
  position: absolute;
  right: -15px;
  top: -2px;
`;

export const IconContent = styled(Icon)`
  color: rgba(255, 255, 255, 0.5);
`;

export const ChildrensContent = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`;