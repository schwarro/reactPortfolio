import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
            <Header className="headerColor" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutMe">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Rob Schwartz</Link>}>
                <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutMe">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
