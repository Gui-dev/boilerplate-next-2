import { themes } from '@storybook/theming'

import { GlobalStyle } from './../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'light' },
    current: 'dark'
  }
}

export const decorators = [
  (Story) =>  (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]
