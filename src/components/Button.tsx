import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
	title: string;
}

export function Button({ title, ...rest }: ButtonProps ){
	return (
		<TouchableOpacity 
			style={styles.button}
			{...rest}
		>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		bottom: 40,
		left: 30,
		right: 30,
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