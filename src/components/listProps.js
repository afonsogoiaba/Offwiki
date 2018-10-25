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
				<ScrollView style={styles.lista}>
					<View style={styles.bloco}>
						<Text>Proriedades HTML</Text>
					</View>
					<View style = {styles.bloco}>
						<Text>Proriedades CSS</Text>
					</View>
					<View>
						<Text style = {styles.bloco}>Proriedades jS</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	body:{
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	
container:{
	padding: '10px'
},
lista: {
	padding: '10px',
	backgroundColor: 'green'
},
bloco: {
	width: 120,
	height: 90,
	backgroundColor: '#000'
}

});