import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesHousing(props) {

		return (
			<>
				{props.selectedChoices.housing.map((choice, f) => {
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