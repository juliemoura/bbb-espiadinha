import { ReactNode } from "react";
import { Image } from "./styles";
import * as Animatable from "react-native-animatable";

type ImageWithBlinkTypes = {
    uri: string;
    borderColor?: string;
}
const ImageWithBlink = ({ uri, borderColor = "#47D814"}: ImageWithBlinkTypes) => {
    return (
        <Animatable.View animation="pulse" iterationCount="infinite" duration={1000} style={{ borderWidth: 2, borderColor: borderColor, borderRadius: 999, padding: 3 }}>
            <Image
                source={{ uri: uri }}
            />
        </Animatable.View>
    );
};

export default ImageWithBlink;
