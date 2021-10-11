import { Home } from './src/pages/Home';
import { StatusBar } from 'react-native';
import React from 'react';

export default function App() {
	return (
		<>
			<StatusBar barStyle="light-content"/>
			<Home />
		</>
	);
}