import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto'}}>
        <Grid className="landingGrid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatarImg"
              />
            <div className="bannerText">
              <h1>Front End Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | jQuery | React
              </p>
              <div className="socialLinks">
                <a href="https://www.linkedin.com/in/rob-schwartz-a90091135/">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://github.com/schwarro">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
