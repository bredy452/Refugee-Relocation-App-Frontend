import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesCommunity(props) {

		return (
			<>
				{props.selectedChoices.religion !== "" && 
					<Grid.Column >
						<List key={props.selectedChoices.religion}>
    						<List.Item>
    							<h5>Religion:</h5>
    							{props.selectedChoices.religion.replace('_', ' ')}
    						</List.Item>
  						</List>
  					</Grid.Column>
  				}

  				{props.selectedChoices.language !== "" && 
  					<Grid.Column>
						<List key={props.selectedChoices.language}>
    						<List.Item>
    							<h5>Language:</h5>
    							{props.selectedChoices.language.replace('_', ' ')}
    						</List.Item>
  						</List>
  					</Grid.Column>
  				}

  				{props.selectedChoices.countryOfOrigin !== "" &&
  					<Grid.Column>
						<List key={props.selectedChoices.countryOfOrigin}>
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