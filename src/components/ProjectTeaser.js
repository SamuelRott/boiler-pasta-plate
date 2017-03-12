import React       from 'react';
import { Link } from 'react-router';

class ProjectTeaser extends React.Component
{

  render()
  {
    const project = this.props.project;

    return (
			<div>
        <h2>
          <Link to={`/project/${project.id}`}>{project.id}</Link>
        </h2>
        <h3></h3>
			</div>
    );
  }
}




export default ( ProjectTeaser );
