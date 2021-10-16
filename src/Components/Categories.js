import React, {Component} from 'react'
import Choices from './Choices'
import {Button, Popup, Form, Dropdown } from 'semantic-ui-react'

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
				<Popup trigger={<Button>Education</Button>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox label='Primary School'/>
    					<Form.Checkbox label='Junior High School'/>
    					<Form.Checkbox label='High School'/>
    					<Form.Checkbox label='College/University'/>
    					<Form.Checkbox label='GED Classes'/>
    					<Form.Checkbox label='Night Classes'/>
    					<Form.Checkbox label='Junior High School'/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Button>Employment</Button>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Button>Community</Button>} on='click' flowing hoverable>
    				<Form>
    					<Form.Field>
    						<label>Religion</label>	
    							<Dropdown
    								label='religion'
    								placeholder="-Select-"/>
    					</Form.Field>
    					<Form.Field>
    						<label>Language</label>	
    							<Dropdown
    								label='langauge'
    								placeholder="-Select-"/>
    					</Form.Field>
    					<Form.Field>
    						<label>Country of Origin</label>	
    							<Dropdown
    								label='countryOfOrigin'
    								placeholder="-Select-"/>
    					</Form.Field>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Button>Transportation</Button>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox label='Public Transportation'/>
    					<Form.Checkbox label='Walkability'/>
    					<Form.Checkbox label='Carpooling Programs'/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Button>Housing</Button>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox label='Temporary Housing'/>
    					<Form.Checkbox label='Low Income Housing'/>
    					<Form.Checkbox label='Rent Stablized Housing'/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Button>Safety and Resources</Button>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Form.Checkbox label=''/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
				{/*<input type='radio' id='education' name='education' value='education'/>
				<label for='education'>Education</label><br></br>
				<Choices/>

				<input type='radio' id='employment' name='employment' value='employment'/>
				<label for='employment'>Employment</label><br></br>

				<input type='radio' id='community' name='community' value='community'/>
				<label for='community'>Community</label><br></br>

				<input type='radio' id='transportation' name='transportation' value='transportation'/>
				<label for='transportation'>Transportation</label><br></br>

				<input type='radio' id='housing' name='housing' value='housing'/>
				<label for='housing'>Housing</label><br></br>

				<input type='radio' id='safetyAndResources' name='safetyAndResources' value='safetyAndResources'/>
				<label for='safetyAndResources'>Safety and Resources</label>*/}
				
			</>

			)
	}


}