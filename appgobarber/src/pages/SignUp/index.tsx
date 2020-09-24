import React, { useRef } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import Input from '../../components/Input'

import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'

import { Container, Title,  BackToSignInText, BackToSignIn } from './styles';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();

    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);

    return (
        <>
            <KeyboardAvoidingView 
                style= {{ flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
                >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1}}
                >    
                    <Container>
                        <Image source= {logoImg}/>
                        <View>
                            <Title>Sign Up</Title>
                        </View>  
                        <Form 
                        ref={formRef} 
                        onSubmit= {(data) => 
                        {console.log(data);
                        }}>  
                            <Input autoCapitalize="words" name="name" icon="user" placeholder="Name" returnKeyType="next" onSubmitEditing={() => emailInputRef.current?.focus()} />
                            <Input ref={emailInputRef} keyboardType="email-address" autoCorrect={false} autoCapitalize="none" returnKeyType="next" name="email" icon="mail" placeholder="E-mail" onSubmitEditing={() => passwordInputRef.current?.focus()}/>
                            <Input ref={passwordInputRef} secureTextEntry name="password" icon="lock" placeholder="Password" textContentType="newPassword"
                             returnKeyType="send" onSubmitEditing={() => formRef.current?.submitForm()}/>
                         </Form>
                            <Button onPress= { () => formRef.current?.submitForm() }>Enter</Button>
                        
                    </Container>
                </ScrollView>
                    <BackToSignIn onPress={() => navigation.goBack()}>
                        <Icon name= "arrow-left" size= {20} color ="#fff" />
                        <BackToSignInText>Back to login</BackToSignInText>
                    </BackToSignIn>
                
            </KeyboardAvoidingView>
        </>
    );
};

export default SignUp