import React, { useState } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TextInput,
	FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

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
			
			<FlatList 
				data={mySkills}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<SkillCard skill={item} />
				)}
			/>

			<Button handleAddSkill={handleAddSkill}/>

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
});