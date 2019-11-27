import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State }
  from 'react-native-gesture-handler';

import Header from "~/components/Header";
import Tabs from "~/components/Tabs";
import Menu from "~/components/Menu";

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation
} from "./styles";

export default function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          // Evento de arraste na vertical (eixo Y)
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    // Se estado anterior é ativo:
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      // Somar valor de cada arraste
      offset += translationY;

      if (translationY >= 88) {
        opened = true;
      } else {
        translateY.setValue(0);
        translateY.setOffset(offset);
        offset = 0;
      }

      // Animação do limite de arraste
      Animated.timing(translateY, {
        toValue: opened ? 312 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 312 : 0;
        translateY.setOffset(offset);
        // Reiniciar valor da variável
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={ translateY } />

        <PanGestureHandler
          onGestureEvent={ animatedEvent }
          onHandlerStateChange={ onHandlerStateChange }
        >
          <Card style={{
            transform: [{
              // Arraste permitido
              translateY: translateY.interpolate({
                inputRange: [-500, 0, 312],
                outputRange: [-50, 0, 312],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <CardHeader>
              <Icon
                name="attach-money"
                size={20}
                color="#333"
              />

              <Icon
                name="visibility-off"
                size={20}
                color="#333"
              />
            </CardHeader>

            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 4.742,40</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transferência de R$ 35,00 recebida
                  de Michele Cristina hoje às 16:07h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={ translateY } />
    </Container>
  )
}