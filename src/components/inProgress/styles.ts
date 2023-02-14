import styled from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  width: 100%;
  height: 625px;
  padding: 10px 20px 20px 20px;
`;

export const ImageContent = styled.Text`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20px;
  color: #DCDCDC;
  font-size: 13px;
  top: -3px;
`;

export const ImageContainer = styled.View`
  margin: 0 0 0 10px;
`;

export const Content = styled.View`
  margin-bottom: 15px;
`;