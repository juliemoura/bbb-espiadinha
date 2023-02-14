import { DescriptionTitle, DescriptionTitleContainer } from "./styles";

type DescriptionTypes = {
    title: string;
    borderColor: string;
}
const Description = ({ title, borderColor }: DescriptionTypes) => {
    return (
        <DescriptionTitleContainer borderColor={borderColor}>
            <DescriptionTitle>{title}</DescriptionTitle>
        </DescriptionTitleContainer>
    );
};

export default Description;
