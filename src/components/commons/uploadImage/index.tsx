import React, { useState } from 'react';
import { Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AvatarContent, ButtonPicker, ButtonPickerAfter, IconContainer, Container, AvatarContentBefore } from "./styles";

export default function UploadImage() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Container>
      {image ?
        <ButtonPicker onPress={pickImage}></ButtonPicker> :
        <ButtonPickerAfter onPress={pickImage}>
          <AvatarContent>
            <IconContainer name="picture-o" size={15} />
          </AvatarContent>
          {/* <Text>Selecione um avatar</Text> */}
        </ButtonPickerAfter>}
      {image &&
        <AvatarContentBefore>
          <Image source={{ uri: image }} style={{ width: 60, height: 60, borderRadius: 999 }} />
        </AvatarContentBefore>}
    </Container>
  );
}
