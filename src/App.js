import React  from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import App from './views/home';
import "antd/dist/antd.css";


function app() {
  return (
      <Router>
          <Layout style={{ backgroundColor: 'white' }}>
              <Switch>
                  <Route exact path="/" component={App}/>
              </Switch>
          </Layout>
      </Router>
  );
}

export default app;
