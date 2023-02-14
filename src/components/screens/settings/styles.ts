import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  height: 705px;
  width: 100%;
  padding: 0 20px 20px 20px;
  position: relative;
  background: #080808;
  z-index: 3;
`;

export const IconContainer = styled(Icon)`
  color: rgba(255, 255, 255, 0.5);
`;

export const ExternalContainer = styled.SafeAreaView`
  position: relative;
  top: -70px;
  width: 100%;
`;

export const InternalContainer = styled.View`
  padding: 0 0 20px 0;
  display: flex;
  align-items: center;
`;

export const TitlePage = styled.Text`
  font-size: 38px;
  color: #ffffff;
  padding: 30px 0 0 0;
  font-weight: bold;
  width: 60%;
`;

export const AvatarInput = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px 0 0 0;
  width: 100%;
`;

export const Text = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  padding-left: 20px;
`;

export const AvatarContent = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
`;