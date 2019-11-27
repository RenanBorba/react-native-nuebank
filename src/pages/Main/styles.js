import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #FFF;
  border-radius: 4px;
  margin: -20px 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  /*top: 312px*/
  top: 0
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #667
`;

export const Description = styled.Text`
  font-size: 29px;
  margin-top: 3px;
  color: #333
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #EEE;
  border-radius: 4px;
`;
