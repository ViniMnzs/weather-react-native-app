import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

export const Head = styled(LinearGradient)`
    width: 95%;
    height: 55%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Date = styled.Text`
    color: #FFF;
    font-size: 17px;
`;

export const City = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
`;

export const Temp = styled.Text`
    color: #FFF;
    font-size: 80px;
    font-weight: bold;
`;