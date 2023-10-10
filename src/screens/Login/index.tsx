import React, { useState } from 'react';
import { Welcome, Container, Title, Description, Access } from './styles';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { StorageManager } from '../../utils/storage';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const title = 'Hi!\nWelcome';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeValue = (value: string) => {
    setValue(value);
  };

  const handleAccess = async () => {
    try {
      setIsLoading(true);
      const emailLowerCase = value.toLowerCase();
      StorageManager.setEmail(emailLowerCase);
      navigation.navigate('Home' as never);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'There was a problem when registering your email!',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filledValues = value === '';

  return (
    <Container>
      <Welcome>
        <Title>{title}</Title>
        <Description>Im waiting for you, please enter your detail</Description>
      </Welcome>
      <Access>
        <Input
          label="Entre com o seu email!"
          onChangeText={text => handleChangeValue(text)}
        />
        <Button
          title="Access"
          disabled={filledValues}
          onPress={handleAccess}
          isLoading={isLoading}
        />
      </Access>
    </Container>
  );
};

export default Login;
