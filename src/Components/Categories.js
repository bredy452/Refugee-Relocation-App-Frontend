import React, {Component} from 'react'
import Choices from './Choices'
// import USWDS from '../node_modules/uswds/src/js/components'

export default class Categories extends Component{
	constructor(props) {
		super(props)
		this.state = {
			education: [],
			employment: [],
			community: [],
			transportation: [],
			housing: [],
			safetyAndResources: []
		}
	}

	render() {
		console.log(this.state)
		return (
			<>
				<input type='radio' id='education' name='education' value='education'/>
				<label for='education'>Education</label><br></br>

				<input type='radio' id='employment' name='employment' value='employment'/>
				<label for='employment'>Employment</label><br></br>

				<input type='radio' id='community' name='community' value='community'/>
				<label for='community'>Community</label><br></br>

				<input type='radio' id='transportation' name='transportation' value='transportation'/>
				<label for='transportation'>Transportation</label><br></br>

				<input type='radio' id='housing' name='housing' value='housing'/>
				<label for='housing'>Housing</label><br></br>

				<input type='radio' id='safetyAndResources' name='safetyAndResources' value='safetyAndResources'/>
				<label for='safetyAndResources'>Safety and Resources</label>
				<Choices/>
			</>

			)
	}


}