import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import firebase from 'firebase'
import Home from "./components/Home";
import Input from "./components/Input";
import App from 'grommet/components/App';
import Menu from 'grommet/components/Menu';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';

const padding = {
  padding: '30px'
}

class Apps extends Component {
  constructor () {
    super()
    let config = {
      apiKey: "AIzaSyCCRX9837cZkHpxQBoM-7Ntoob01pUE7Tw",
      authDomain: "usermanager-ef8a3.firebaseapp.com",
      databaseURL: "https://usermanager-ef8a3.firebaseio.com",
      projectId: "usermanager-ef8a3"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <App style={padding}>
            <Router>
              <div>
                <Header>
                  <Menu responsive={true}
                    size='medium'
                    direction='row'
                    closeOnClick={false}
                    primary={false}
                    inline={true}>
                      <Link to="/">Home</Link>
                      <Link to="/input">Input Password</Link>
                  </Menu>
                </Header>
                <Section>
                  <Route exact path="/" component={Home}/>
                  <Route path="/input" component={Input}/>
                </Section>
              </div>
              </Router>
              <Footer justify='between'
                size='small'>
                <Box direction='row'
                  align='center'
                  pad={{"between": "medium"}}>
                  <Paragraph margin='none'>
                    © 2017 Our Labs
                  </Paragraph>
                </Box>
              </Footer>
          </App>
        </Provider>
      </div>
    );
  }
}

export default Apps;
