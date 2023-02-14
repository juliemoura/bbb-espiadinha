import { Container, Name, Image } from "./styles";

interface INameWithImage {
    uri?: string;
    title: string;
    filteredName: string;
};

const NameWithImage = ({ uri, title, filteredName }: INameWithImage) => {
    return (
        <Container>
            <Image
                source={{
                    uri: uri,
                }}
            />
            <Name filteredName={filteredName}>{title}</Name>
        </Container>
    );
};

export default NameWithImage;
