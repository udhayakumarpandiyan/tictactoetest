import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SplineChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Monthly Bounce - 2019"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Sales (in USD)",
				prefix: "$",
				includeZero: false
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2019, 0), y: 25060 },
					{ x: new Date(2019, 1), y: 27980 },
					{ x: new Date(2019, 2), y: 42800 },
					{ x: new Date(2019, 3), y: 32400 },
					{ x: new Date(2019, 4), y: 35260 },
					{ x: new Date(2019, 5), y: 33900 },
					{ x: new Date(2019, 6), y: 40000 },
					{ x: new Date(2019, 7), y: 52500 },
					{ x: new Date(2019, 8), y: 32300 },
					{ x: new Date(2019, 9), y: 42000 },
					{ x: new Date(2019, 10), y: 37160 },
					{ x: new Date(2019, 11), y: 38400 }
				]
			}]
		}

		return (
			<CanvasJSChart options={this.props.options || options} />
		);
	}
}

export default SplineChart;                           