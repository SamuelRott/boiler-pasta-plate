import React      from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from 'app/components/App';
import OverviewPage from 'app/components/OverviewPage';
import GardenPage from 'app/components/garden/GardenPage';
import PlantDetail from 'app/components/garden/PlantDetail'


import 'app/styles/index.css';


export default function main( container )
{


    const content =
    (

        <Router history={ browserHistory }>
            <Route path="/" component={App}/>
            <Route path="/garden" component={GardenPage}/>
            <Route path="/plant/:plantId" component={PlantDetail}/>

        </Router>

    );

    return render( content, container );
}
