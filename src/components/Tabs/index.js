import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TabsContainer,
  TabItem,
  TabText
} from "./styles";

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0,312],
          outputRange: [0, 8],
          extrapolate: 'clamp',
        })
      }],
      // Efeito opacidade
      opacity: translateY.interpolate({
        inputRange: [0.01 , 312],
        outputRange: [1, 0.3],
      }),
    }}
    >
      <TabsContainer>
        <TabItem>
          <Icon
            name="person-add"
            size={24}
            color="#FFF"
          />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <Icon
            name="chat-bubble-outline"
            size={24}
            color="#FFF"
          />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon
            name="arrow-downward"
            size={24}
            color="#FFF"
          />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <Icon
            name="arrow-upward"
            size={24}
            color="#FFF"
          />
          <TabText>Transferir</TabText>
        </TabItem>

        <TabItem>
          <Icon
            name="lock"
            size={24}
            color="#FFF"
          />
          <TabText>Bloquear</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};
