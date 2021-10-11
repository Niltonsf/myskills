import React, { useState } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TextInput,
	Platform,
	FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillProps {
	id: string;
	name: string;
}

export function Home() {

	const [ newSkill, setNewSkill ] = useState('');
	const [ mySkills, setMySkills ] = useState<SkillProps[]>([]);

	function handleAddSkill() {
		const data = {
			id: String(new Date().getTime()),
			name: newSkill
		};

		setMySkills([...mySkills, data]);
	}

	function handleRemoveSkill(id: string) {
		setMySkills(oldState => oldState.filter(
			skill => skill.id !== id
		));
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
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<SkillCard 
						skill={item.name} 
						onPress={() => handleRemoveSkill(item.id)}
					/>
				)}
			/>

			<Button 
				title="Add"
				onPress={handleAddSkill}
				activeOpacity={0.7}
			/>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
		paddingHorizontal: 30,
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