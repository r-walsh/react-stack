import React from 'react';
import { Card, CardText, RaisedButton } from 'material-ui';
import Actions from '../actions/index'

export default class Login extends React.Component {

	onClick() {
		Actions.login();
	}

	render() {
		return (
			<Card style={{
				  maxWidth: 800
				, margin: `30px auto`
				, padding: 50
			}}>
				<CardText style={{
					textAlign: `center`
				}}>
					To start chatting away, please login with your google account.
				</CardText>
				<RaisedButton style={{
					display: `block`
				}} onClick={ this.onClick.bind( this ) }
				   label="Log in with Google"/>
			</Card>
		);
	}
}