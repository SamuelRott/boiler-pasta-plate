import React       from 'react';
import map from 'lodash/map';

import serverConstants from 'app/constants/server';


class ProjectDetail extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch(`${serverConstants.hostname}categories/${this.props.params.projectId}`)
      .then(res => {
        return res.json();
      })
      .then(project => {
        this.setState({project});
      });
  }


  render()
  {
    console.log('render');
    // const project = projectsData[this.props.params.projectId];
    // console.log(this.state);
    // console.log(this.state.project);
    return (
			<div>
        {this.state.project.id}
			</div>
    );
  }
}




export default ( ProjectDetail );
