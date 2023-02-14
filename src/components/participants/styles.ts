import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

export const ExternalContainer = styled.ScrollView`
  height: 625px;
  padding: 0 20px 20px 20px;
`;

export const NameWithImage = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Container = styled.View``;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0 20px 0;
`;

export const Title = styled.Text`
  color: #FFFF;
  font-size: 18px;
  margin-left: 10px;
`;

export const Input = styled.TextInput`
  border: 1px solid #797979;
  height: 49px;
  border-radius: 5px;
  padding: 0 20px;
  color: #fff;
  font-size: 15px;
`;

export const IconContainer = styled(Icon)`
  color: rgba(255, 255, 255, 0.5);
`;

export const IconContent = styled.TouchableOpacity`
  padding: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
`;
