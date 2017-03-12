import React       from 'react';
import { Link } from 'react-router';




import OverviewPage from 'app/components/OverviewPage';



class App extends React.Component
{


    render()
    {

      return (
  			<div className="App">
  			  <h1><Link to="/projects">Overview</Link></h1>
  			</div>
      );
    }
}




export default ( App );
