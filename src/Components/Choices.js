import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function Choices(props) {

		return (
			<>
				{props.selectedChoices.education.map((choice, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>
  					)	
				})}
				{props.selectedChoices.employment.map((choice, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>	
  					)	
				})}
				{props.selectedChoices.community.map((choice, i, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>
  					)		
				})}
				{props.selectedChoices.transportation.map((choice, i, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>
  					)	
				})}
				{props.selectedChoices.housing.map((choice, i, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>
  					)
				})}
				{props.selectedChoices.safetyAndResources.map((choice, i, f) => {
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




