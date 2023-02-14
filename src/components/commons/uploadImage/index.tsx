import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ButtonPicker, ButtonPickerAfter, Text } from "./styles";

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image ? <ButtonPicker onPress={pickImage}></ButtonPicker> : <ButtonPickerAfter onPress={pickImage}><Text>📷</Text></ButtonPickerAfter>}
      {image && <Image source={{ uri: image }} style={{ width: 50, height: 50, borderRadius: 999, zIndex: 1 }} />}
    </View>
  );
}