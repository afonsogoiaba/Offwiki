import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import Search from 'Search';

export default class AppHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style = {styles.logo}>
						<Text>{props.title}</Text>	
						<Image source={require('logo.svg')} />
					</View>
					<Search />
					<Text>{props.version}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container:{
		height: 56
	},
	header: {
		flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
		backgroundColor: '#000',
		color: '#fff'
	},

	logo: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
});