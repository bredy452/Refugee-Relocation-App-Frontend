import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesSafetyAndResources(props) {
	console.log(props.selectedChoices.safetyAndResources)

		return (

			<>
				{props.selectedChoices.safetyAndResources.map((choice, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice.replace('_', ' ')}</List.Item>
  							</List>
  						</Grid.Column>
  					)
				})}
			</>
		)
}