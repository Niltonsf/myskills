import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({ handleAddSkill }){
	return (
		<TouchableOpacity 
			style={styles.button}
			activeOpacity={.7}
			onPress={handleAddSkill}
		>
			<Text style={styles.buttonText}>Add</Text>
		</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		bottom: 40,
		left: 20,
		right: 20,
		width: '100%',
		backgroundColor: '#A370F7',
		padding: 15,
		borderRadius: 7,
		alignItems: 'center',
	},
	buttonText: {
		color: '#FFF',
		fontSize: 17,
		fontWeight: 'bold',
	},
});