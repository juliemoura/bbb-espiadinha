import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  display: flex;
`;

export const Title = styled.Text`
  color: #797979;
  font-size: 18px;
  padding-bottom: 5px;
`;

export const Name = styled.Text`
  color: #FFFFFF;
  font-size: 21px;
`;

export const Icon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  top: -39px;
`;