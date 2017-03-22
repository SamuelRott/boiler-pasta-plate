import React  from 'react';
import { Link } from 'react-router';


export default function Terasse( props )
{
    return (

        <div className="Container">
					<div className="TerasseFloor" title="the entire terasse floor">
						<div className="BlackFlowerBox" title="Black flower box, a part of it is garlic, the rest is indeterminated">
							<Link className="Goji" title="Goji tree" to={`/plant/goji`}></Link>

							<Link className="Rose" title="Rose" to={`/plant/dwarfrose`}>

							</Link>
							<Link className="Garlic" title="Garlic" to={`/plant/garlic`}>

							</Link>
						</div>
						<div className="OrangeFlowerBox" title="orange flower box dedicated to mint">
							<Link className="Mint" title="Mint" to={`/plant/mint`}>

							</Link>
						</div>
						<div className="WoodenFlowerBox" title="long wooden box, empty for now">
							<Link className="Tomato" title="Tomato" to={`/plant/tomato`}>

							</Link>
							<Link className="Salad" title="Salad" to={`/plant/salad`}>

							</Link>
							<Link className="Tomato" title="Tomato" to={`/plant/tomato`}>

							</Link>
						</div>
						<div className="Pillar" title="Beton pillar">

						</div>
					</div>
					<div className="Direction"><h1>mainzer strasse</h1></div>
        </div>
    );
}
