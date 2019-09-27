import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '0.5em'}}>Rob Schwartz</h2>
            <h4 style={{color: 'grey'}}>Front End Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Github</h5>
            <a style={{color: '#000000', textDecoration: 'none'}} href="https://github.com/schwarro">https://github.com/schwarro</a>
            <h5>LinkedIn</h5>
            <a style={{color: '#000000', textDecoration: 'none'}} href="https://www.linkedin.com/in/rob-schwartz-a90091135/">https://www.linkedin.com/in/rob-schwartz-a90091135/</a>
          </Cell>

          <Cell className="resumeRightCol" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              studied="Full Stack Web Development"
              schoolName="Bitmaker(General Assembly Toronto)"
              schoolDescription="Toronto, On"
            />

            <Education
              startYear={2010}
              studied="Bachelor of Arts in Political Science and Business"
              schoolName="Brock University"
              schoolDescription="St. Catharines, On"
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
