import React, {Component} from 'react'
import Choices from './Choices'
import {Button, Popup, Form, Dropdown, Radio} from 'semantic-ui-react'
// import SliderView from 'semantic-ui-react-slider'

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
			safetyAndResources: [],
			rating: undefined,
			educationToggle: false,
			employmentToggle: false,
			communityToggle: false, 
			transportationToggle: false,
			housingToggle: false,
			safetyAndResourcesToggle: false
		}
	}

	toggleChangeEducation = (e) => {
		this.setState({
			educationToggle: !this.state.educationToggle
		})

		if (this.state.educationToggle !== false) {
			this.setState({
				education: []
			})
		}
		// console.log(this.state.educationToggle)
	}

	componentDidUpdate() {
		console.log(this.state.education)
	}

	toggleChangeHousing = (e) => {
		e = true
	}

	toggleChangeEmployment = (e) => {
		e = true
	}

	toggleChangeCommunity = (e) => {
		e = true
	}

	toggleChangeTransportation = (e) => {
		e = true
	}

	toggleChangeSafety = (e) => {
		e = true
	}

  	handleChange = (e) => {
  		this.setState({ rating: e.target.value })
  		
  	}

	handleClickEducation = (e) => {
		const copyState = [...this.state.education]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		// console.log(this.state.education)
	}

	handleClickEmployment = (e) => {
		const copyState = [...this.state.employment]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		console.log(this.state)
	}

	handleClickCommunity = (e) => {
		const copyState = [...this.state.community]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		console.log(this.state)
	}

	handleClickTransportation = (e) => {
		const copyState = [...this.state.transportation]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		console.log(this.state)
	}

	handleClickHousing = (e) => {
		const copyState = [...this.state.housing]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		console.log(this.state)
	}

	handleClickSafety = (e) => {
		const copyState = [...this.state.safetyAndResources]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		console.log(this.state)
	}

	render() {
		const {rating} = this.state
		return (
			<>
				<Popup trigger={<Radio toggle label='Education' onChange={(e) => this.toggleChangeEducation(e)}/>} on='click' flowing >
    				<Form>
    					<Form.Checkbox value='education' id='Primary School' label='Primary School' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='Junior High School' label='Junior High School' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='High School' label='High School' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='College/University' label='College/University' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='GED Classes' label='GED Classes' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='Night Classes' label='Night Classes' onClick={(e) => this.handleClickEducation(e)}/>

    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Choices selectedChoices={this.state} toggleEducation={this.toggleChangeEducation} refresh={this.componentDidUpdate}/>
  				<Popup trigger={<Radio toggle label='Employment'/>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox value='employment' id='' label=''/>
    					<Form.Checkbox value='employment' id='' label=''/>
    					<Form.Checkbox value='employment' id='' label=''/>
    					<Form.Checkbox value='employment' id='' label=''/>
    					<Form.Checkbox value='employment' id='' label=''/>
    					<Form.Checkbox value='employment' id='' label=''/>
    					<Form.Checkbox value='employment' id='' label=''/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Radio toggle label='Community'/>} on='click' flowing hoverable>
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
  				<Popup trigger={<Radio toggle label='Transportation'/>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox value='transportation' id='Public Transportation' label='Public Transportation' onClick={(e) => this.handleClickTransportation(e)}/>
    					<Form.Checkbox value='transportation' id='Walkability' label='Walkability' onClick={(e) => this.handleClickTransportation(e)}/>
    					<Form.Checkbox value='transportation' id='Carpooling Programs' label='Carpooling Programs' onClick={(e) => this.handleClickTransportation(e)}/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Radio toggle label='Housing'/>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox value='housing' id='Temporary Housing' label='Temporary Housing' onClick={(e) => this.handleClickHousing(e)}/>
    					<Form.Checkbox value='housing' id='Low Income Housing' label='Low Income Housing' onClick={(e) => this.handleClickHousing(e)}/>
    					<Form.Checkbox value='housing' id='Rent Stabalized Housing' label='Rent Stabalized Housing' onClick={(e) => this.handleClickHousing(e)}/>
    					<Form.Checkbox value='housing' id='Median Monthly Housing Cost' label='Median Monthly Housing Cost' onClick={(e) => this.handleClickHousing(e)}/>
    					<input
          					type='range'
          					min={0}
          					max={4000}
          					value={rating}
          					onChange={this.handleChange}
        				/>
        				<br />
        				<div>${rating}</div>

    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Popup trigger={<Radio toggle label='Safety and Resources'/>} on='click' flowing hoverable>
    				<Form>
    					<Form.Checkbox value='safetyAndResources' id='' label=''/>
    					<Form.Checkbox value='safetyAndResources' id='' label=''/>
    					<Form.Checkbox value='safetyAndResources' id='' label=''/>
    					<Button>Close</Button>
    				</Form>
  				</Popup><br></br>

			
      
			</>

			)
	}


}