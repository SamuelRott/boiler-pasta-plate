import React      from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from 'app/components/App';
import OverviewPage from 'app/components/OverviewPage';
import GardenPage from 'app/components/GardenPage';
import ProjectDetail from 'app/components/ProjectDetail';
import PlantDetail from 'app/components/PlantDetail';


import 'app/styles/index.css';


export default function main( container )
{


    const content =
    (

        <Router history={ browserHistory }>
            <Route path="/" component={App}/>
            <Route path="/garden" component={GardenPage}/>
            <Route path="/plant/:plantId" component={PlantDetail}/>
            <Route path="/projects" component={OverviewPage}/>
            <Route path="/project/:projectId" component={ProjectDetail}/>

        </Router>

    );

    return render( content, container );
}
