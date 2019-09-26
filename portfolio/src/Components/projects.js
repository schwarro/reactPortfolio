import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTabs: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div>
          <h1>This is HTML/CSS</h1>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div>
          <h1>This is JavaScript</h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div className="projectsGrid">
          {/* Project Card to copy */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#ffffff', height: '176px', background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>React Project #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Demo</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#ffffff', height: '176px', background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>React Project #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Demo</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#ffffff', height: '176px', background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>React Project #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Demo</Button>
            </CardActions>
          </Card>
        </div>
      )
    }
  }



  render() {
    return (
      <div className="categoryTabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ribble>
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects
