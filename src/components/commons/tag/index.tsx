import { ReactNode } from "react";
import { Button, ChildrenContent } from "./styles";

interface IButton {
  selected: boolean;
  onPress: () => void;
  children: ReactNode | ReactNode[];
}

const Tag = ({ selected, onPress, children }: IButton) => {
  return (
    <Button onPress={onPress} selected={selected}>
      <ChildrenContent>{children}</ChildrenContent>
    </Button>
  );
};

export default Tag;
