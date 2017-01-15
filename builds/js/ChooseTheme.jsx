// This script contains the div for different themes
import React from 'react';

var ChooseTheme = React.createClass({
	// change theme
	// pass the value of id to the prop
	changeTheme(e) {
		let theme = e.target.id;
		this.props.changeTheme(theme);
	},

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-2 theme-set" id="blue" onClick={this.changeTheme}></div>
					<div className="col-md-2 theme-set" id="orange" onClick={this.changeTheme}></div>
					<div className="col-md-2 theme-set" id="green" onClick={this.changeTheme}></div>
					<div className="col-md-2 theme-set" id="lightred" onClick={this.changeTheme}></div>
					<div className="col-md-2 theme-set" id="deeporange" onClick={this.changeTheme}></div>
					<div className="col-md-2 theme-set" id="yellow" onClick={this.changeTheme}></div>
				</div>
			</div>
		); // return
	} // render
});


module.exports = ChooseTheme;