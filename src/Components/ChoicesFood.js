import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesFood(props) {

		return (
			<>
				{props.selectedChoices.food.map((choice, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>
  					)
				})}
			</>
		)
}