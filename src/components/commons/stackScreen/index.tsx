import { ReactNode, useState } from "react";
import { Container, Title, TitleContainer, Button, ButtonClosed, HiddenContainer, Text, IconContent, ChildrensContent } from "./styles";
import ImageWithBlink from "../imageWithBlink";

type RoundedTypes = {
    uri: string;
    secondUri?: string;
    title: string;
    children: ReactNode | ReactNode[];
    number?: string;
    borderColor?: string;
}
const Rounded = ({ uri, children, title = "", secondUri = "", number = "", borderColor = "#47D814" }: RoundedTypes) => {
    const [showText, setShowText] = useState(false);

    return (
        <Container>
            <ImageWithBlink uri={uri} borderColor={borderColor} />
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            {secondUri &&
                <Button onPress={() => setShowText(true)}>
                    <ImageWithBlink uri={secondUri} borderColor={borderColor} />
                    <Text>{number}</Text>
                </Button>
            }
            {showText && (
                <HiddenContainer>
                    <ChildrensContent>
                        {children}
                    </ChildrensContent>
                    <ButtonClosed
                        title="X"
                        onPress={() => setShowText(false)}>
                        <IconContent name="closecircle" size={25} />
                    </ButtonClosed>
                </HiddenContainer>
            )}
        </Container>
    );
};

export default Rounded;
