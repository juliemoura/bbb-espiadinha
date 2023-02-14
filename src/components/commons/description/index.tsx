import { DescriptionTitle, DescriptionTitleContainer } from "./styles";

type DescriptionTypes = {
    title: string;
    color: string;
}
const Description = ({ title, color }: DescriptionTypes) => {
    return (
        <DescriptionTitleContainer borderColor={color}>
            <DescriptionTitle>{title}</DescriptionTitle>
        </DescriptionTitleContainer>
    );
};

export default Description;
