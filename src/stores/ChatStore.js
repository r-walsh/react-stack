import { decorate, bind, datasource } from 'alt/utils/decorators';
import _ from 'lodash';
import alt from '../alt/index';
import Actions from '../actions/index';
import ChannelSource from '../sources/ChannelSource';

@datasource( ChannelSource )
@decorate( alt )
class ChatStore {

	constructor() {
		this.state = {
			user: null
		}
	}

	@bind( Actions.channelsReceived )
	recievedChannels( channels ) {
		let selectedChannel;
		_( channels )
			.keys()
			.each( ( key, index ) => {
				channels[key].key = key;

				if ( index === 0 ) {
					channels[key].selected = true;
					selectedChannel = channels[key];
				}
			})
			.value();

		this.setState({
			  channels
			, selectedChannel
		});
	}

	@bind( Actions.login )
	login( user ) {
		this.setState({ user });
	}

}

export default alt.createStore( ChatStore );