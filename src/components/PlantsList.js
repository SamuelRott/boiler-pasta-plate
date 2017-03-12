import React       from 'react';
import map from 'lodash/map';
import fetch from  'isomorphic-fetch';
import PlantTeaser from 'app/components/PlantTeaser';

import serverConstants from 'app/constants/server';

class PlantsList extends React.Component
{
    constructor(props) {
      super(props);

      this.state = {
        plants: []
      };
    }

    componentDidMount() {
      // console.log(this.props);

      fetch(`${serverConstants.hostname}plants`)
        .then(res => {
          return res.json();
        })
        .then(plants => {
          this.setState({plants});
        });
    }

    render()
    {
      const plants = this.state.plants;
      const plantTeasers = map(plants, (plant) =>
        {
          return <PlantTeaser plant={plant} key={plant.id+'key'}  id={plant.id+'key'}/>;
        }
      );

      return (
  			<div className="PlantsList">
  			  <h1>PlantsList</h1>

          <div>
            {plantTeasers}
          </div>
  			</div>
      );
    }
}




export default ( PlantsList );
