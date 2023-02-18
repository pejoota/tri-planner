import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/services/Routes';
import { AuthProvider, ThemeProvider } from './src/contexts';
import { Montserrat_300Light, Montserrat_400Regular, Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat';

const App = () => {

  const [ fontsLoaded ] = useFonts({
    'MontserratLight': Montserrat_300Light,
    'MontserratRegular': Montserrat_400Regular,
    'MontserratSemiBold': Montserrat_600SemiBold,
  });

  if(!fontsLoaded)
    return <></>;

  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <Routes />
          {/* <Footer /> */}
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;