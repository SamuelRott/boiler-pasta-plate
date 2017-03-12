import React       from 'react';
import map from 'lodash/map';
import fetch from  'isomorphic-fetch';
import ProjectTeaser from 'app/components/ProjectTeaser';

import serverConstants from 'app/constants/server';

class OverviewPage extends React.Component
{
    constructor(props) {
      super(props);

      this.state = {
        projects: []
      };
    }

    componentDidMount() {
      // console.log(this.props);

      fetch(`${serverConstants.hostname}projects`)
        .then(res => {
          return res.json();
        })
        .then(projects => {
          this.setState({projects});
        });
    }

    render()
    {
      const projects = this.state.projects;
      const teasers = map(projects, (project) =>
        {
          return <ProjectTeaser project={project} key={project.id+'key'}  id={project.id+'key'}/>;
        }
      );

      return (
  			<div className="OverviewPage">
  			  <h1>OverviewPage</h1>

          <div>
            {teasers}
          </div>
  			</div>
      );
    }
}




export default ( OverviewPage );
