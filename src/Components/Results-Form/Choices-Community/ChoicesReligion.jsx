import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesCommunity(props) {

		return (
			<>
				{props.selectedChoices.religion !== undefined && 
					<Grid.Column>
						<List>
    						<List.Item>
    							<h5>Religion:</h5>
    							{props.selectedChoices.religion.replace('_', ' ')}
    						</List.Item>
  						</List>
  					</Grid.Column>
  				}
			</>
		)
}