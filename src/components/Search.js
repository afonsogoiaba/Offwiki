import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';

export default class Search extends React.Component {
	render () {
		return (
			<View style={styles.search}>
				<TextInput />
				<Image style={styles.lupa} source={require('lupa.svg')}/>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	search: {
		flex: 1,
		backgroudColor: 'rgba(255,255,255,0.7)',
		flexDirection: 'row',
		alignItems: 'center'
	},

	lupa:{
		width: 32,
    height: 32
	}
});