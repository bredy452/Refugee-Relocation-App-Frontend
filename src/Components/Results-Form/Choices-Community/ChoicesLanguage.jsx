import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesCommunity(props) {

		return (
			<>

  				{props.selectedChoices.language !== "" && 
  					<Grid.Column>
						<List>
    						<List.Item>
    							<h5>Language:</h5>
    							{props.selectedChoices.language.replace('_', ' ')}
    						</List.Item>
  						</List>
  					</Grid.Column>
  				}

			</>
		)
}