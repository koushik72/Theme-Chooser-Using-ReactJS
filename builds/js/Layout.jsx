import React from 'react';

var Layout = React.createClass({

	render() {
		return (
			<div>
				<h1 className="text-center">ThemeChooser</h1>
				<div className="col-md-4 div" style={ this.props.theme.background }>
					<h2 className="div-hd">Headline #</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt molestias fugiat id cupiditate eos.</p>
					<button style={this.props.theme.btn} className="btn btn-default">Button</button>
				</div>
				<div className="col-md-4 div" style={this.props.theme.background}>
					<h2 className="div-hd">Headline #</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt molestias fugiat id cupiditate eos.</p>
					<button style={this.props.theme.btn} className="btn btn-default">Button</button>
				</div>
				<div className="col-md-4 div" style={this.props.theme.background}>
					<h2 className="div-hd">Headline #</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt molestias fugiat id cupiditate eos.</p>
					<button style={this.props.theme.btn} className="btn btn-default">Button</button>
				</div>
				<div className="col-md-4 div" style={ this.props.theme.background }>
					<h2 className="div-hd">Headline #</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt molestias fugiat id cupiditate eos.</p>
					<button style={this.props.theme.btn} className="btn btn-default">Button</button>
				</div>
				<div className="col-md-4 div" style={this.props.theme.background}>
					<h2 className="div-hd">Headline #</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt molestias fugiat id cupiditate eos.</p>
					<button style={this.props.theme.btn} className="btn btn-default">Button</button>
				</div>
				<div className="col-md-4 div" style={this.props.theme.background}>
					<h2 className="div-hd">Headline #</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt molestias fugiat id cupiditate eos.</p>
					<button style={this.props.theme.btn} className="btn btn-default">Button</button>
				</div>
			</div>
		); // return
	} // render
});

module.exports = Layout;