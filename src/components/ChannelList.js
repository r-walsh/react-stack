import React from 'react';
import { Card, List, CircularProgress } from 'material-ui';
import Channel from './Channel';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';


@connectToStores
export default class ChannelList extends React.Component {
	constructor( props ) {
		super( props );

		ChatStore.getChannels();
	}

	static getStores() {
		return [ChatStore];
	}

	static getPropsFromStores() {
		return ChatStore.getState();
	}

	render() {
		if ( !this.props.channels ) {
			return (
				<Card style={{
						flexGrow: 1
					}}>
					<CircularProgress
						mode="indeterminate"
						style={{
								  paddingTop: 20
								, paddingBottom: 20
								, margin: `0 auto`
								, display: `block`
								, width: 60
							}} />
				</Card>
			);
		}

		let channelNodes = _( this.props.channels )
							.keys()
							.map( ( key, index ) => {
								let channel = this.props.channels[key];
								return <Channel channel={ channel } key={ index } />;
							})
							.value();

		return (
			<div>
				<Card style={{ flexGrow: 1 }}>
					<List>
						{ channelNodes }
					</List>
				</Card>
			</div>
		);
	}
};