import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
	skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps){
	return (
		<TouchableOpacity 
			style={styles.buttonSkill} 
			{...rest}
		>
			<Text style={styles.textSkill} numberOfLines={1}>{skill}</Text>
		</TouchableOpacity>
	);
}


const styles = StyleSheet.create({
	buttonSkill: {
		marginTop: 20,
		activeOpacity: 0.7,
		padding: 15,
		backgroundColor: '#1f1e25',
		borderRadius: 50
	},
	textSkill: {
		color: '#FFF',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	}
});
