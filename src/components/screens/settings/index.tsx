import { useState } from "react";
import InputControlled from "../../commons/inputControlled";
import UploadImage from "../../commons/uploadImage";
import { Container, InternalContainer, AvatarInput, Text, TitlePage, ExternalContainer, IconContainer, AvatarContent } from "./styles";

export type SettingTypes = {
    onSave: (name: string, lastName: string) => void;
}

const Settings = ({ onSave }: SettingTypes) => {
    return (
        <ExternalContainer>
            <Container>
                <TitlePage>Configurações da conta</TitlePage>
                <InternalContainer>
                    <AvatarInput>
                        <UploadImage />
                    </AvatarInput>
                    <InputControlled onSave={onSave} />
                </InternalContainer>
            </Container>
        </ExternalContainer>
    )
};

export default Settings;