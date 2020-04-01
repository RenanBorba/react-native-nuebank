## react-mobile-ebank 
# Projeto Portfólio - Aplicação eBank Mobile React Native
Aplicação Front-end Mobile desenvolvida em React Native para clone da interface principal do app Nubank, voltada para bancos eletrônicos e empresas financiadoras e de crédito. O aplicativo permite a interação do usuário com o card principal com um simples gesto de arraste, permitindo poder visualizar o menu oculto.
<ul>
  <li>Components</li>
  <li>react-navigation</li>
  <li>Routes</li>
  <li>Axios</li>
  <li>Github API</li>
  <li>StatusBar</li>
  <li>styled-components</li>
  <li>react-native-vector-icons</li>
  <li>react-native-webview-qrcode</li>
  <li>Animated</li>
  <li>gesture-handler</li>
  <li>PanGestureHandler</li>
  <li>State</li>
</ul>
<br><br> 


## src/pages/Main/index.js
```js
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State }
  from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

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
} from './styles';

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
                extrapolate: 'clamp'
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
};
```
<br><br>


## src/components/Header/index.js
```js
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';
  import
  {
    Container,
    Top,
    Logo,
    Title
  } from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={ logo } />
        <Title>Renan</Title>
      </Top>
      <Icon
        name="keyboard-arrow-down"
        size={20}
        color="#FFF"
      />
    </Container>
  );
};
```
<br><br>


## src/components/Tabs/index.js 
```js
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TabsContainer,
  TabItem,
  TabText
} from './styles';

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
```
<br><br>


## src/components/Menu/index.js 
```js
import React from 'react';
import QRCode from 'react-native-webview-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      // Efeito opacidade
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}>
      <Code>
        <QRCode
          value="https://api.github.com"
          size={80}
          bgColor="#8B10AE"
          fgColor="#FFF"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon
            name="help-outline"
            size={20}
            color="#FFF"
          />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon
            name="person-outline"
            size={20}
            color="#FFF"
          />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon
            name="credit-card"
            size={20}
            color="#FFF"
          />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon
            name="smartphone"
            size={20}
            color="#FFF"
          />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};
```
<br><br>


## Interface principal


![0](https://user-images.githubusercontent.com/48495838/69767111-84714a00-1159-11ea-91c9-daad95d93768.JPG)

<br><br><br>


## Interface após arraste do card pelo usuário


![1](https://user-images.githubusercontent.com/48495838/69767112-84714a00-1159-11ea-9c5a-0c77e977c0dd.jpg)

<br><br><br>


## Interface após redirecionamento do card ao rodapé da tela


![2](https://user-images.githubusercontent.com/48495838/69767114-84714a00-1159-11ea-9edc-00a9d34463e8.JPG)

 
<br><br><br> 
Renan Borba. 

