import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin: -20px 30px
`;

export const Code = styled.View`
  background: #FFF;
  padding: 10px;
  align-self: center
`

export const Nav = styled.View`
  margin-top: 20px;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.4)
`

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.4)
`

export const NavText = styled.Text`
  font-size: 15px;
  color: #FFF;
  margin-left: 18px
`

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-top: 6px
`

export const SignOutButtonText = styled.Text`
  color: #FFF;
  font-weight: bold
`
