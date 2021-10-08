import React, { useState } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TextInput,
	TouchableOpacity
} from 'react-native';

export function Home() {

	const [ newSkill, setNewSkill ] = useState('');
	const [ mySkills, setMySkills ] = useState([]);

	function handleAddSkill() {
		if(mySkills.find(element => element === newSkill)) return;
		setMySkills([...mySkills, newSkill]);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome, Nilton</Text>
			
			<TextInput 
				style={styles.input}
				placeholder="New Skill"
				placeholderTextColor='#555'
				onChangeText={setNewSkill}
			/>
		
			<Text style={
				[
					styles.title, 
					{ marginTop: 20, textAlign: 'left', fontSize: 18}
				]
			}>
				MySkills
			</Text>
			
			{mySkills.map(skill => (
				<TouchableOpacity style={styles.buttonSkill} key={skill}>
					<Text style={styles.textSkill}>{skill}</Text>
				</TouchableOpacity>
			))}

			<TouchableOpacity 
				style={styles.button}
				activeOpacity={.7}
				onPress={handleAddSkill}
			>
				<Text style={styles.buttonText}>Add</Text>
			</TouchableOpacity>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
		paddingHorizontal: 20,
		paddingVertical: 70
	},
	title: {
		textAlign: 'center',
		color: '#FFF',
		fontSize: 24,
		fontWeight: 'bold'
	},
	input: {
		backgroundColor: '#1f1e25',
		color: '#FFF',
		fontSize: 18,
		padding: Platform.OS === 'ios' ? 15 : 10,
		marginTop: 30,
		borderRadius: 7
	},
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
	}
});