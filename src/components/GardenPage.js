import React       from 'react';
import map from 'lodash/map';
import fetch from  'isomorphic-fetch';
import Terasse from 'app/components/Terasse';

import serverConstants from 'app/constants/server';

class GardenPage extends React.Component
{




    render()
    {

      return (
  			<div>
          <Terasse/>
  			</div>
      );
    }
}




export default ( GardenPage );
