import React       from 'react';
import map from 'lodash/map';
import fetch from  'isomorphic-fetch';
import Fibonaci from 'app/components/pattern/Fibonaci';

import serverConstants from 'app/constants/server';

class PatternPage extends React.Component
{




    render()
    {

      return (
  			<div>
          <Fibonaci/>
  			</div>
      );
    }
}




export default ( PatternPage );
