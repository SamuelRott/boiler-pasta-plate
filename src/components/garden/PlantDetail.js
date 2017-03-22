import React       from 'react';
import map from 'lodash/map';

import serverConstants from 'app/constants/server';


class PlantDetail extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      plant: {}
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch(`${serverConstants.hostname}plants/${this.props.params.plantId}`)
      .then(res => {
        return res.json();
      })
      .then(plant => {
        this.setState({plant});
      });
  }


  render()
  {
    // const plant = plantsData[this.props.params.plantId];
    // console.log(this.state);
    // console.log(this.state.plant);
    return (
			<div>
        <h1>{this.state.plant.name}</h1>
        {this.state.plant.status}
			</div>
    );
  }
}




export default ( PlantDetail );
