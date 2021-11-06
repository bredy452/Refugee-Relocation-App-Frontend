import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesFood(props) {
console.log(props.selectedChoices.food)
		return (
			<>
				{props.selectedChoices.food.map((choice, f) => {
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