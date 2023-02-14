import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from '../../superiorContent/styles';
import { ErrorContainer, IconContainerWarning, ErrorMessage, Button, Container, ButtonTitle, IconContainerButton, InputContent, Label, SuccessMessage, ProgressContainer} from './styles';

type InputControlledTypes = {
    onSave: (name: string, surname: string) => void;
}

const InputControlled = ({ onSave }: InputControlledTypes) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [progress, setProgress] = useState(100);

    const handleSave = () => {
        onSave(name, lastName);
        setSuccessMessage('Alterações salvas');

        let timeLeft = 10;
        
        const intervalId = setInterval(() => {
            timeLeft--;
            setProgress((timeLeft / 10) * 100);

            if (timeLeft === 0) {
                setSuccessMessage('');
                clearInterval(intervalId);
            }
        }, 200);
    };

    const handleNameChangeText = (text: string) => {
        setName(text);

        if (text.length < 3) {
            setNameErrorMessage('O nome deve ter no mínimo três letras.');
        } else if (/[^a-zA-Z]/.test(text)) {
            setNameErrorMessage('O nome não deve conter caracteres especiais ou espaços.');
        } else {
            setNameErrorMessage('');
        }
    };

    const handleLastNameChangeText = (text: string) => {
        setLastName(text);

        if (text.length < 3) {
            setLastNameErrorMessage('O sobrenome deve ter no mínimo três letras.');
        } else if (/[^a-zA-Z]/.test(text)) {
            setLastNameErrorMessage('O sobrenome não deve conter caracteres especiais ou espaços.');
        } else {
            setLastNameErrorMessage('');
        }
    };

    return (
        <Container>
            <InputContent>
                <Label>Nome</Label>
                <Input onChangeText={handleNameChangeText} value={name} />
                {nameErrorMessage ?
                    <ErrorContainer>
                        <IconContainerWarning name="exclamation-circle" size={15} />
                        <ErrorMessage>
                            {nameErrorMessage}
                        </ErrorMessage>
                    </ErrorContainer>
                    : ""}
            </InputContent>
            <InputContent>
                <Label>Sobrenome</Label>
                <Input onChangeText={handleLastNameChangeText} value={lastName} />
                {lastNameErrorMessage ?
                    <ErrorContainer>
                        <IconContainerWarning name="exclamation-circle" size={15} />
                        <ErrorMessage>
                            {lastNameErrorMessage}
                        </ErrorMessage>
                    </ErrorContainer>
                    : ""}
            </InputContent>

            <Button onPress={handleSave}>
                <IconContainerButton name="save" size={15} />
                <ButtonTitle>Salvar</ButtonTitle>
            </Button>
            {successMessage ? 
            <ProgressContainer>
                <SuccessMessage>{successMessage}</SuccessMessage>
                <View style={styles.progressBar}>
                    <View style={[styles.progress, { width: `${progress}%` }]} />
                </View>
            </ProgressContainer>
                : null}
        </Container>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        height: 2,
        width: '100%',
        backgroundColor: '#47D814',
        overflow: 'hidden',
        marginTop: 5,
    },
    progress: {
        height: '100%',
        backgroundColor: '#ccc',
    },
});

export default InputControlled;
