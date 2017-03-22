import React       from 'react';
// import map from 'lodash/map';
import fetch from  'isomorphic-fetch';

import serverConstants from 'app/constants/server';

class R4Api extends React.Component
{
    constructor(props) {
      super(props);

    }

    componentDidMount() {

      fetch(`${serverConstants.apiEndpoint}/channels`)
        .then(res => {
					console.log('res:', res.json());
          return res;
        })
				// .then(project => {
				// 	this.setState({project});
				// });
    }

    render()
    {
      // const projects = this.state.projects;
      // const teasers = map(projects, (project) =>
      //   {
      //     return <ProjectTeaser project={project} key={project.id+'key'}  id={project.id+'key'}/>;
      //   }
      // );

      return (
  			<div className="">
					lol
  			</div>
      );
    }
}




export default ( R4Api );
