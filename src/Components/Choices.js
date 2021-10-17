import React, {Component} from 'react'
import {modal} from 'react-bootstrap'

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
				<label class="usa-label" for="education">Education</label><br></br>
					<select class="usa-select" name="education" id="education">
  						<option disabled selected>- Education -</option>
  						<option >Primary School</option>
  						<option>Junior High School</option>
  						<option>High School</option>
  						<option>College/University</option>
  						<option>GED Classes</option>
  						<option>Night Classes</option>
					</select><br></br>

					<label class="usa-label" for="employment">Employment</label><br></br>
					<select class="usa-select" name="employment" id="employment">
  						<option disabled selected>- Employment -</option>
  						<option>Option A</option>
  						<option>Option B</option>
  						<option>Option C</option>
					</select><br></br>

					<label class="usa-label" for="community">Community</label><br></br>
					<select class="usacommunity" id="community">
  						<option disabled selected>- Community -</option>
  						<option>Option A</option>
  						<option>Option B</option>
  						<option>Option C</option>
					</select><br></br>

					<label class="usa-label" for="transportation">Transportation</label><br></br>
					<select class="usa-select" name="transportation" id="transportation">
  						<option disabled selected>- Transportation -</option>
  						<option>Public Transportation</option>
  						<option>Walkability</option>
  						<option>Carpooling Programs</option>
					</select><br></br>

					<label class="usa-label" for="housing">Housing</label><br></br>
					<select class="usa-select" name="housing" id="housing">
  						<option disabled selected>- Housing -</option>
  						<option>Temporary Housing</option>
  						<option>Low Income Housing</option>
  						<option>Rent Stablized Housing</option>
					</select><br></br>

					<label class="usa-label" for="safetyAndResources">Safety and Resources</label><br></br>
					<select class="usa-select" name="safetyAndResources" id="safetyAndResources">
  						<option disabled selected>- Safety and Resources -</option>
  						<option>Option A</option>
  						<option>Option B</option>
  						<option>Option C</option>
					</select>
			</>

			)
	}


}




