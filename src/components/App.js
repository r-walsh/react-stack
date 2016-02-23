import React from 'react';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import MessageList from './MessageList';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import Login from './Login';
import ChatStore from '../stores/ChatStore';

const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;
const AppBar = mui.AppBar;

@connectToStores
export default class App extends React.Component {
	constructor() {
		super();

		ThemeManager.setPalette({
			  primary1Color: Colors.blue500
			, primary2Color: Colors.blue700
			, primary3Color: Colors.blue100
			, accent1Color: Colors.pink400
		});
	};

	// Required for @connectToStores
	static getStores() {
		return [ChatStore]; //Gets the stores this component is interested in.
	}

	static getPropsFromStores() {
		return ChatStore.getState();
	}
	/////////////

	static childContextTypes ={
		muiTheme: React.PropTypes.object
	};

	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	};

	render() {
		return (
			<div>
				<AppBar title="Awesome Chat App" />
				{ this.props.user ?
					<div>
						<div style={{
								  display: `flex`
								, flexFlow: `row wrap`
								, maxWidth: 1200
								, width: `100%`
								, margin: `30px auto 30px`
							}}>
							<ChannelList />
							<MessageList />
						</div>
						<MessageBox />
					</div> :
					<Login />
				}
			</div>
		);
	};
};