/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/theme/default';
import Toast from 'react-native-toast-message';
import { toastConfig, VISIBILITY_TIME_DEFAULT } from './src/components/Toast';
import AppNavigation from './src/navigation';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppNavigation />
      <Toast config={toastConfig} visibilityTime={VISIBILITY_TIME_DEFAULT} />
    </ThemeProvider>
  );
}

export default App;
