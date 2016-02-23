import Actions from '../actions/index';
import Firebase from 'firebase';

let firebaseRef = new Firebase(`https://rw-react-stack.firebaseio.com/channels`);

let ChannelSource = {
	getChannels: {
		remote( state ) {
			return new Promise( ( resolve, reject ) => {
				firebaseRef.once( `value`, dataSnapshot => {
					let channels = dataSnapshot.val();

					resolve( channels );
				});
			});
		}
		, success: Actions.channelsReceived
		, failed: Actions.channelsFailed
	}
};

export default ChannelSource;