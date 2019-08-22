import React from 'react';
import AboutMe from './AboutMe.jsx';
import Introduction from './Introduction.jsx';
import SideBar from './SideBar.jsx';
import Timeline from './Timeline.jsx';
import "../styling/app.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {} 
  }

  render() {
    return (
        <div id="colorlib-page">
        <div id="container-wrap">
         	<SideBar />
				<div id="colorlib-main">
					<Introduction /> 
					<AboutMe />
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;