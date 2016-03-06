var React = require('react');
var uniqueId = require('lodash.uniqueid');
var Avatar = require('material-ui/lib/avatar');
var Cookie = require('react-cookie');

module.exports = React.createClass({
	propTypes: {
		onTokenReceived: React.PropTypes.func
	},
	getInitialState: function() {
		return {image: '', letter: '' };

	},
	signinCallback: function(googleUser){
		var profile = googleUser.getBasicProfile();

        var cookieOpts = {maxAge: googleUser.getAuthResponse().expires_in, path: '/'};
        if(profile.getImageUrl() !== undefined) {
			this.setState({image: profile.getImageUrl()});	
        	Cookie.save('user_image', profile.getImageUrl(), cookieOpts);	
        }     
        
        this.setState({letter: profile.getName()[0]});
        Cookie.save('user_letter', profile.getName()[0], cookieOpts);
        Cookie.save('user_token', googleUser.getAuthResponse().id_token, cookieOpts);
        console.log(googleUser.getAuthResponse());
        this.props.onTokenReceived(googleUser.getAuthResponse().id_token);

	},
	componentWillMount: function() {
		this.callbackName = uniqueId('signInCallback-');
		window[this.callbackName] = this.signinCallback;
		
		var image = Cookie.load('user_image');
		var letter = Cookie.load('user_letter');
		var token = Cookie.load('user_token');

		if(token !== undefined) {
			this.props.onTokenReceived(token);
			this.setState({image: image === undefined ? '' : image, letter: letter});
		}
	},
	componentWillUnmount: function() {
	  delete window[this.callbackName];
	},
	renderSignIn: function() {
		return	<div className='g-signin2' data-onsuccess={this.callbackName}></div>
	},
	renderAvatar: function() {
		return	<Avatar src={this.state.image}></Avatar>
	},
	renderName: function() {
		return	<Avatar>{this.state.letter}</Avatar>
	},
	render: function() {
		if(this.state.image != '') {
			return this.renderAvatar();
		} else if (this.state.letter.length != '') {
			return this.renderName();
		} else {
			return this.renderSignIn();
		}

	}
});