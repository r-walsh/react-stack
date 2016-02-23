import alt from '../alt/index';
import Firebase from 'firebase';

class Actions {
	constructor() {
		this.generateActions(
			  `channelsReceived`
			, `channelsFailed`
		);
	}

	login( args ) {
		return dispatch => {
			let firebaseRef = new Firebase(`https://rw-react-stack.firebaseio.com`);
			firebaseRef.authWithOAuthPopup(`google`, ( err, user ) => {
				if ( err ) {
					return;
				}

				dispatch( user );
			});
		}
	}

}

export default alt.createActions(Actions);