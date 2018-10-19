import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import Search from 'Search';

export default class AppHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<View style={styles.header}>
				<Image source={require('logo.svg')} />
				<Search />
				<Text>{props.version}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	header: {}
});