import styled from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  height: 705px;
  width: 100%;
  padding: 20px 0 20px 0;
`;

export const InternalContainer = styled.View`
  padding-bottom: 30px;
`;

export const QueridometroExternalContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #212121;
  padding: 20px 10px 0 0;
  margin-left: 12px;
`;

export const QueridometroContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const QueridometroInternalContainer = styled.View`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 15px;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-right: 10px;
`;

export const EmojiContainer = styled.Text`
  font-size: 14px;
`;

export const EmojiContent = styled.View`
  font-size: 14px;
  padding: 10px;
  border: 1px solid rgba(217, 217, 217, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  width: 40px;
  height: 40px;
  margin: 0 2px 0 2px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-top: 10px;
`;

export const QuantityContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const QuantityInternalContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
