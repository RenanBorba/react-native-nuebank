import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: -4px
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20
  },
})``;

export const TabItem = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #FFF
`;