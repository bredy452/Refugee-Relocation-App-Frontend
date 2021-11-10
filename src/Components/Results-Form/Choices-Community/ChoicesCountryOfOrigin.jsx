import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesCommunity(props) {

		return (
			<>
  				{props.selectedChoices.countryOfOrigin !== "" &&
  					<Grid.Column>
						<List>
    						<List.Item>
    							<h5>Country of Origin:</h5>
    							{props.selectedChoices.countryOfOrigin.replace('_', ' ')}
    						</List.Item>
  						</List>
  					</Grid.Column>
  				}
			</>
		)
}