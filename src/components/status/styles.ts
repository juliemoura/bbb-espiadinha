import styled from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  height: 625px;
  padding: 0 20px 20px 20px;
  width: 100%;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const DescriptionContent = styled.Text`
  color: #DCDCDC;
  font-size: 16px;
  width: 280px;
  text-align: left;
`;

export const DescriptionContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;