import styled from "styled-components/native";

export interface IStyledButton {
  selected: boolean;
}

export const Button = styled.TouchableOpacity<IStyledButton>`
  background-color: ${(props: { selected: boolean; }) => props.selected ? '#393939' : 'transparent'};
  border: ${(props: { selected: boolean; }) => props.selected ? '1px solid transparent' : '1px solid #393939'};
  padding: 10px 20px;
  border-radius: 999px;
  margin-right: 20px;
`;

export const ChildrenContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;