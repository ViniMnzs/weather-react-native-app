import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
        flex:1;
        justify-content: flex-start;
        align-items: center;
        background-color: #e8f0ff;
        padding-top: 50px;
`;

export const Arrow = styled.TouchableOpacity`
    flex-direction: row;
    margin-left: 15px;
    align-self: flex-start;
    align-items: center;
    margin-bottom: 10px;
`;

export const Label = styled.Text`
    font-size: 22px;
`;

export const InputContainer = styled.View`
    align-items: center;
    flex-direction: row;
    background-color: #DDD;
    width: 90%;
    height: 50px;
    border-radius: 8px;
    margin-bottom: 30px;
`;

export const Input = styled.TextInput`
    width: 85%;
    height: 50px;
    background-color: #DDD;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 7px;
`;

export const Icon = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 15%;
    background-color: #1ED6FF;
    height: 50px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const Head = styled(LinearGradient)`
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    border-radius: 8px;
`;

export const Date = styled.Text`
    color: #FFF;
    font-size: 16px;
`;

export const City = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
`;

export const Temp = styled.Text`
    color: #FFF;
    font-size: 90px;
    font-weight: bold;
`;
