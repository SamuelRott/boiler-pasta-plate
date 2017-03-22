import React       from 'react';
import { Link } from 'react-router';

import OverviewPage from 'app/components/OverviewPage';
import GardenPage from 'app/components/GardenPage';

import R4Api from 'app/components/R4Api';



class App extends React.Component
{


    render()
    {

      return (
  			<div className="App">
					<R4Api/>
  			</div>
      );
    }
}




export default ( App );
