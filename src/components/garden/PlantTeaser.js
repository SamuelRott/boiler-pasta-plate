import React       from 'react';
import { Link } from 'react-router';

class PlantTeaser extends React.Component
{

  render()
  {
    const plant = this.props.plant;

    return (
			<div>
        <h2>
          <Link to={`/plant/${plant.id}`}>{plant.id}</Link>
        </h2>
        <h3></h3>
			</div>
    );
  }
}




export default ( PlantTeaser );
