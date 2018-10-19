import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';

export default class Search extends React.Component {
	render () {
		return (
			<View style={styles.search}>
				<TextInput />
				<Image source={require('lupa.svg')}/>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	search: {
		backgroudColor: 'rgba(255,255,255,0.7)'
	}
});