import React from 'react';
import { ListItem, Avatar } from 'material-ui';

export default class Message extends React.Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<ListItem leftAvatar={ <Avatar src="https://en.gravatar.com/userimage/94364550/a5be1270367e3351ef5ef5e915d88ddb.jpg?size=200" />}>
				{ this.props.message }
			</ListItem>
		);
	}
};