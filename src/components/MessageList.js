import React from 'react';
import { Card, List } from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import Message from './Message';


export default class MessageList extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			messages: {}
		};

		this.firebaseRef = new Firebase(`https://rw-react-stack.firebaseio.com/messages/`);
		this.firebaseRef.on(`child_added`, message => {
			if ( this.state.messages[message.key()] ) {
				return;
			}

			let messageVal = message.val();
			messageVal.key = message.key();
			this.state.messages[messageVal.key] = messageVal;

			this.setState({ messages: this.state.messages });
		});

		this.firebaseRef.on(`child_removed`, message => {
			let key = message.key();

			delete this.state.messages[key];

			this.setState({ messages: this.state.messages });
		});
	}

	render() {
		let messageNodes = _.values(this.state.messages).map( message => <Message key={ message.key() } message={ message.message } />);

		return (
			<Card style={{ flexGrow: 2, marginLeft: 30 }}>
				<List>
					{ messageNodes }
				</List>
			</Card>
		);
	}
};