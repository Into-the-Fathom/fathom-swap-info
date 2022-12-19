import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle } from 'styled-components'
import { useDarkModeManager } from 'contexts/LocalStorage'
import styled from 'styled-components'
import { Text } from 'rebass'

export default function ThemeProvider({ children }) {
  const [darkMode] = useDarkModeManager()

  return <StyledComponentsThemeProvider theme={theme(darkMode)}>{children}</StyledComponentsThemeProvider>
}

const theme = (color) => ({
  customColor: color,
  textColor: color,

  panelColor: 'rgba(255, 255, 255, 0)',
  backgroundColor: '#0E1D34',

  uniswapPink: '#ff007a',

  concreteGray: '#292C2F',
  inputBackground: '#1F1F1F',
  shadowColor: '#000',
  mercuryGray: '#333333',

  text1: '#FAFAFA',
  text2: '#C3C5CB',
  text3: '#002F2D',
  text4: '#565A69',
  text5: '#43FFF6',

  // special case text types
  white: '#FFFFFF',

  // backgrounds / greys
  bg1: '#0E1D34',
  bg2: '#2C2F36',
  bg3: '#43FFF6',
  bg4: '#565A69',
  bg5: '565A69',
  bg6: '#000',

  //specialty colors
  modalBG: 'rgba(0,0,0,0.85)',
  advancedBG: '#192A42',
  onlyLight: '#22242a',
  divider: '#131f35',
  headerBackground: '#131f35',
  borderBG: '#253656',
  placeholderColor: '#4F658C',

  //primary colors
  primary1: '#2172E5',
  primary2: '#3680E7',
  primary3: '#4D8FEA',
  primary4: '#376bad70',
  primary5: '#153d6f70',

  // color text
  primaryText1: '#6da8ff',
  primaryText2: '#5977A0',

  // secondary colors
  secondary1: '#2172E5',
  secondary2: '#17000b26',
  secondary3: '#17000b26',

  shadow1: '#000',

  // other
  red1: '#FF6871',
  green1: '#27AE60',
  yellow1: '#FFE270',
  yellow2: '#F3841E',
  link: '#fff',
  blue: '2f80ed',

  background: '#0E1D34',
})

const TextWrapper = styled(Text)`
  color: ${({ color, theme }) => theme[color]};
`

export const TYPE = {
  main(props) {
    return <TextWrapper fontWeight={500} fontSize={14} color={'text1'} {...props} />
  },

  body(props) {
    return <TextWrapper fontWeight={400} fontSize={14} color={'text1'} {...props} />
  },

  green(props) {
    return <TextWrapper fontWeight={400} fontSize={14} color={'text3'} {...props} />
  },

  small(props) {
    return <TextWrapper fontWeight={500} fontSize={11} color={'text1'} {...props} />
  },

  header(props) {
    return <TextWrapper fontWeight={600} color={'text1'} {...props} />
  },

  largeHeader(props) {
    return <TextWrapper fontWeight={500} color={'text1'} fontSize={24} {...props} />
  },

  light(props) {
    return <TextWrapper fontWeight={400} color={'text4'} fontSize={14} {...props} />
  },

  pink(props) {
    return <TextWrapper fontWeight={props.faded ? 400 : 600} color={props.faded ? 'text1' : 'text1'} {...props} />
  },
}

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`

export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    background: linear-gradient(180deg, #000817 7.88%, #0D1725 113.25%);
  }
  
  html {
    background-color: #0D1725;
  }

  a {
    text-decoration: none;
    color: #fff;

    :hover {
      text-decoration: none
    }
  }

  
.three-line-legend {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: #20262E;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

.three-line-legend-dark {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: white;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

@media screen and (max-width: 800px) {
  .three-line-legend {
    display: none !important;
  }
}

.tv-lightweight-charts{
  width: 100% !important;
  

  & > * {
    width: 100% !important;
  }
}


  html {
    font-size: 1rem;
    font-variant: none;
    color: #000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
  }
`
