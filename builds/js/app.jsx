// import css files
require('../css/style.css');

// import libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import modules
import Layout from './Layout';
import ChooseTheme from './ChooseTheme';
import styles from './Styles';

// just for fun
console.log("Ah! So you like looking under the hood? :D");

// first time visiting
// set the theme on first visit
if ( localStorage.getItem('themeName') == null ) {
	localStorage.setItem('themeName', 'blue');
}

var ThemeChooser = React.createClass({

	getInitialState() {
		return {
			theme: styles[localStorage.getItem('themeName')]
		} // return
	}, // -getinitialState

	// change theme when clicked on different theme
	changeTheme(themeName) {
		this.setState({ theme: styles[themeName] });
		localStorage.setItem('themeName', themeName);
		console.log(this.state.theme);
	},

	render() {
		return (
			<div>
				<h3 className="text-center">Click on a theme to change theme</h3>
				<ChooseTheme changeTheme={this.changeTheme}/>
				<Layout theme={this.state.theme}/>
			</div>
		); // return
	} // render
});

ReactDOM.render(<ThemeChooser />, document.getElementById('react'));