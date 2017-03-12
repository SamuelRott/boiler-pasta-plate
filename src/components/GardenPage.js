import React       from 'react';
import map from 'lodash/map';
import fetch from  'isomorphic-fetch';
import Terasse from 'app/components/Terasse';
import PlantsList from 'app/components/PlantsList';

import serverConstants from 'app/constants/server';

class GardenPage extends React.Component
{




    render()
    {

      return (
  			<div>
          <Terasse/>
					<PlantsList/>
  			</div>
      );
    }
}




export default ( GardenPage );
