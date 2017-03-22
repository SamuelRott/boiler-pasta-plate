import React from 'react';
import {Link} from 'react-router';

import OverviewPage from 'app/components/OverviewPage';
import GardenPage from 'app/components/garden/GardenPage';

class App extends React.Component
{

    render()
		{
      return (
				<div className="App">
					<h1><Link to="/pattern">Pattern</Link></h1>
          <h1><Link to="/garden">Garden</Link></h1>
				</div>
      );
    }
}

export default (App);
