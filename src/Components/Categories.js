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
			food: [],
			rating: undefined,
			educationToggle: false,
			employmentToggle: false,
			communityToggle: false, 
			transportationToggle: false,
			housingToggle: false,
			safetyAndResourcesToggle: false,
			foodToggle: false
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
		console.log(this.state)
	}

	toggleChangeHousing = (e) => {
		this.setState({
			housingToggle: !this.state.housingToggle
		})

		if (this.state.housingToggle !== false) {
			this.setState({
				housing: []
			})
		}
	}

	toggleChangeEmployment = (e) => {
		this.setState({
			employmentToggle: !this.state.employmentToggle
		})

		if (this.state.employmentToggle !== false) {
			this.setState({
				employment: []
			})
		}
	}

	toggleChangeCommunity = (e) => {
		this.setState({
			communityToggle: !this.state.communityToggle
		})

		if (this.state.communityToggle !== false) {
			this.setState({
				community: []
			})
		}
	}

	toggleChangeTransportation = (e) => {
		this.setState({
			transportationToggle: !this.state.transportationToggle
		})

		if (this.state.transportationToggle !== false) {
			this.setState({
				transportation: []
			})
		}
	}

	toggleChangeSafety = (e) => {
		this.setState({
			safetyAndResourcesToggle: !this.state.safetyAndResourcesToggle
		})

		if (this.state.safetyAndResourcesToggle !== false) {
			this.setState({
				safetyAndResources: []
			})
		}
	}

	toggleChangeFood = (e) => {
		this.setState({
			foodToggle: !this.state.foodToggle
		})

		if (this.state.foodToggle !== false) {
			this.setState({
				food: []
			})
		}
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

	handleClickFood = (e) => {
		const copyState = [...this.state.food]
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
				<Popup trigger={<Radio toggle label='Education' onChange={(e) => this.toggleChangeEducation(e)}/>} on={'click'} flowing >
    				<Form>
    					<Form.Checkbox value='education' id='primary_school' label='Primary School' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='junior_high' label='Junior High School' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='high_school' label='High School' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='college' label='College/University' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='ged_classes' label='GED Classes' onClick={(e) => this.handleClickEducation(e)}/>

    					<Form.Checkbox value='education' id='night_classes' label='Night Classes' onClick={(e) => this.handleClickEducation(e)}/>

    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Choices selectedChoices={this.state} toggleEducation={this.toggleChangeEducation} refresh={this.componentDidUpdate}/>
  				{/*<Popup trigger={<Radio toggle label='Employment' onChange={(e) => this.toggleChangeEducation(e)}/>} on={'click'} flowing>
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
  				</Popup>*/}
  				<Popup trigger={<Radio toggle label='Community' onChange={(e) => this.toggleChangeCommunity(e)}/>} on={'click'} flowing>
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
  				<Choices selectedChoices={this.state} toggleCommunity={this.toggleChangeCommunity} refresh={this.componentDidUpdate}/>

  				<Popup trigger={<Radio toggle label='Transportation' onChange={(e) => this.toggleChangeTransportation(e)}/>} on={'click'} flowing>
    				<Form>
    					<Form.Checkbox value='transportation' id='public_transportation' label='Public Transportation' onClick={(e) => this.handleClickTransportation(e)}/>
    					<Form.Checkbox value='transportation' id='walkability' label='Walkability' onClick={(e) => this.handleClickTransportation(e)}/>
    					<Form.Checkbox value='transportation' id='carpooling' label='Carpooling Programs' onClick={(e) => this.handleClickTransportation(e)}/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Choices selectedChoices={this.state} toggleTransportation={this.toggleChangeTransportation} refresh={this.componentDidUpdate}/>

  				<Popup trigger={<Radio toggle label='Housing' onChange={(e) => this.toggleChangeHousing(e)}/>} on= {'click'} hoverable>
    				<Form>
    					<Form.Checkbox value='housing' id='temporary' label='Temporary Housing' onClick={(e) => this.handleClickHousing(e)}/>
    					<Form.Checkbox value='housing' id='low_income' label='Low Income Housing' onClick={(e) => this.handleClickHousing(e)}/>
    					<Form.Checkbox value='housing' id='rent_stabilized' label='Rent Stabalized Housing' onClick={(e) => this.handleClickHousing(e)}/>
    					<Form.Checkbox value='housing' id='median_monthly_cost' label='Median Monthly Housing Cost' onClick={(e) => this.handleClickHousing(e)}/>
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
  				<Choices selectedChoices={this.state} toggleHousing={this.toggleChangeHousing} refresh={this.componentDidUpdate}/>

  				<Popup trigger={<Radio toggle label='Safety and Resources' onChange={(e) => this.toggleChangeSafety(e)}/>} on={'click'} hoverable>
    				<Form>
    					<Form.Checkbox value='safetyAndResources' id='low_crime' label='Low Crime' onClick={(e) => this.handleClickSafety(e)}/>
    					<Form.Checkbox value='safetyAndResources' id='hospitals' label='Hospitals' onClick={(e) => this.handleClickSafety(e)}/>
    					<Form.Checkbox value='safetyAndResources' id='police' label='Police' onClick={(e) => this.handleClickSafety(e)}/>
    					<Form.Checkbox value='safetyAndResources' id='shelters' label='Shelters' onClick={(e) => this.handleClickSafety(e)}/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Choices selectedChoices={this.state} toggleSafety={this.toggleChangeSafety} refresh={this.componentDidUpdate}/>

  				<Popup trigger={<Radio toggle label='Food' onChange={(e) => this.toggleChangeFood(e)}/>} on={'click'} hoverable>
    				<Form>
    					<Form.Checkbox value='food' id='supermarkets' label='Supermarkets' onClick={(e) => this.handleClickSafety(e)}/>
    					<Form.Checkbox value='food' id='convience_stores' label='Convience Stores' onClick={(e) => this.handleClickSafety(e)}/>
    					<Form.Checkbox value='food' id='snap_ebt' label='Snap EBT' onClick={(e) => this.handleClickSafety(e)}/>
    					<Form.Checkbox value='food' id='ethnic_markets' label='Ethnic Markets' onClick={(e) => this.handleClickSafety(e)}/>
    					<Button>Close</Button>
    				</Form>
  				</Popup>
  				<Choices selectedChoices={this.state} toggleFood={this.toggleChangeFood} refresh={this.componentDidUpdate}/><br></br>

			
      
			</>

			)
	}


}