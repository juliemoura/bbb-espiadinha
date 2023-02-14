import React from "react";
import styled from "styled-components/native";

import { BBBTheme } from "./themes/BBBTheme";
import { ThemeProvider } from "styled-components";

import Navbar from "./src/components/navbar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FooterNavbar from "./src/components/footerNavbar";
import HomeScreen from "./src/HomeScreen";
import { Details } from "./src/Details";

const Container = styled.SafeAreaView`
  background-color: #080808;
  flex: 1;
  padding: 0 20px;
`;

const InternalContainer = styled.View`
  padding: 20px;
  /* height: 770px; */
`;

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Container>
      <InternalContainer>
        <ThemeProvider theme={BBBTheme}>
          <Navbar />
          {/* <HomeScreen /> */}
          {/* <Home /> */}
          {/* <Queridometro /> queridometro  */}
        </ThemeProvider>
      </InternalContainer>
      <FooterNavbar />
    </Container>
  );
}

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { SafeAreaView } from "react-native";

// import { HomeScreen } from "./src/HomeScreen";
// import { Details } from "./src/Details";

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <SafeAreaView>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Details" component={Details} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

// export default App;
