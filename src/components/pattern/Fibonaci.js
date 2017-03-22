import React  from 'react';
import { Link } from 'react-router';


export default function Fibonaci( props )
{

		{/*
			CREATE ELEMENTS
			we need to start with a number and that will be the with of the biggest element of the spirale
 			then we divide this number by the golden ratio (1.618)
 			the given value will be the height of the first element and the width of the next element
			GoldenRatio = 1.618
			GoldenHeight = 80%vh (do research, what is the responsive/cross-device GoldenHeight)
			GoldenSquare = GoldenHeight / GoldenRatio
			GoldenWidth = GoldenHeight + GoldenSquare
		*/}

		{/*
			PLACE ELEMENTS
			palce elements so they take the form of a spirale
			Container width = GoldenWidth
			Container height = GoldenHeight
			Container position = center
			E1 square = GoldenSquare
			E1 position = left 0, top 0
			E2 square = E1 square / GoldenRatio
			E2 position = left E1 square, top 0
			E3 square = E2 square / GoldenRatio
			E3 position = right 0, top E2 square

		*/}

    return (

        <div className="Container">
					<h1>the goal is to generate a Fibonaci spirale </h1>
					<p>
						CREATE ELEMENTS<br/>
						we need to start with a number and that will be the with of the biggest element of the spirale
						then we divide this number by the golden ratio (1.618)<br/>
						the given value will be the height of the first element and the width of the next element<br/>
						GoldenRatio = 1.618<br/>
						GoldenHeight = 80%vh (do research, what is the responsive/cross-device GoldenHeight)<br/>
						GoldenSquare = GoldenHeight / GoldenRatio<br/>
						GoldenWidth = GoldenHeight + GoldenSquare
					</p>
					<p>	PLACE ELEMENTS <br/>
						palce elements so they take the form of a spirale<br/>
						Container width = GoldenWidth<br/>
						Container height = GoldenHeight<br/>
						Container position = center<br/>
						E1 square = GoldenSquare<br/>
						E1 position = left 0, top 0<br/>
						E2 square = E1 square / GoldenRatio<br/>
						E2 position = left E1 square, top 0<br/>
						E3 square = E2 square / GoldenRatio<br/>
						E3 position = right 0, top E2 square
					</p>

        </div>
    );
}
