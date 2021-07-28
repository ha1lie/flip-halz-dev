import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Grommet, Header, Text } from 'grommet';
import AppBar from './components/AppBar';
import UnknownPage from './UnknownPage';
import PrivacyPage from './PrivacyPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';

const theme = {
  global: {
    focus: {
      shadow: {
        size: '0px'
      },
      outline: {
        size: '2px',
        color: 'rubyPink',
        radius: '10px'
      },
    },
    textArea: {
      extend: {
        color: 'purple'
      },
    },
    colors: {
      background: 'eppeline',
      placeholder: 'offwhite',
      border: 'white',
      appBarBackgroundDark: 'charcoal',
      appBarBackgroundLight: 'offwhite',
      appBarTextColorDark: 'offwhite',
      appBarTextColorLight: 'charcoal',
      appBarTextColor: 'appBarTextColorDark',
      appBarBackground: 'appBarBackgroundDark',
      violetPurple: '#7C77B9',
      rubyPink: '#D81159',
      polishedPine: '#439A86',
      offwhite: '#FBFEF9',
      charcoal: '#2C2C34',
      nearBlack: '#17171A',
      eppeline: '#F7F1ED',
      offlineColor: '#0A2463',
      onlineColor: '#44FFD1',
      idleColor: '#FFE66D',
      DoNotDisturbColor: '#FE4A49',
    },
    font: {
      family: 'Nunito',
      size: '18px',
      height: '20px',
    },
  },
  heading: {
    level: {
      '4': {
        color: '#ff0000',
        font: {
          weight: '200'
        }
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <Grommet theme={ theme }>
        <Router>
          <Box flex='grow' direction='column' pad={{ bottom: '100pt'}} >
            <AppBar />
            <Box margin={{ top: '60px' }} >
              <Box flex='grow' margin='medium' >
                <Switch>
                  <Route path='/contact' exact>
                    <ContactPage />
                  </Route>
                  <Route path='/privacy' exact>
                    <PrivacyPage />
                  </Route>
                  <Route path='/' exact> 
                    <HomePage />
                  </Route>
                  <Route path='/'>
                    <UnknownPage />
                  </Route>
                </Switch>
              </Box>
            </Box>
          </Box>
        </Router>
      </Grommet>
    );
  }
}


export default App;
