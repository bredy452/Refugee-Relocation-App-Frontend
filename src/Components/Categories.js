import React, {Component} from 'react'
import Choices from './Choices'
import {Button, Popup, Form, Dropdown, Radio } from 'semantic-ui-react'

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

	handleClick = (e) => {
		const copyState = [...this.state.education]
		copyState.push(e.target.value)
		this.setState({
			[e.target.id]: copyState
		})
		console.log(this.state.education)
	}

	render() {

		return (
			<>
				<Popup trigger={<Radio label='Education'/>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox id='education' value='Primary School' label='Primary School'/>
    					<Form.Checkbox id='education' value='Junior High School' label='Junior High School'/>
    					{/*<Form.Checkbox id='education' value='High School' label='High School' onClick={(e) => this.handleClick(e)}/>
    					<Form.Checkbox id='education' value='College/University' label='College/University' onClick={(e) => this.handleClick(e)}/>
    					<Form.Checkbox id='education' value='GED Classes' label='GED Classes' onClick={(e) => this.handleClick(e)}/>
    					<Form.Checkbox id='education' value='Night Classes' label='Night Classes' onClick={(e) => this.handleClick(e)}/>*/}
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Radio label='Employment'/>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox name='employment' label=''/>
    					<Form.Checkbox name='employment' label=''/>
    					<Form.Checkbox name='employment' label=''/>
    					<Form.Checkbox name='employment' label=''/>
    					<Form.Checkbox name='employment' label=''/>
    					<Form.Checkbox name='employment' label=''/>
    					<Form.Checkbox name='employment' label=''/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Radio label='Community'/>} on='click' flowing hoverable>
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
  				<Popup trigger={<Radio label='Transportation'/>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox name='transportation' label='Public Transportation'/>
    					<Form.Checkbox name='transportation' label='Walkability'/>
    					<Form.Checkbox name='transportation' label='Carpooling Programs'/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Radio label='Housing'/>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox name='housing' label='Temporary Housing'/>
    					<Form.Checkbox name='housing' label='Low Income Housing'/>
    					<Form.Checkbox name='housing' label='Rent Stablized Housing'/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Radio label='Safety and Resources'/>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox name='safetyAndResources' label=''/>
    					<Form.Checkbox name='safetyAndResources' label=''/>
    					<Form.Checkbox name='safetyAndResources' label=''/>
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