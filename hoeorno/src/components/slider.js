import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl,Button, Checkbox,ControlLabel,Grid, Row,Jumbotron } from 'react-bootstrap';

class slider extends Component{

    constructor(props){
      super(props)
      this.state = {

      }
    }

var SliderItem = React.createClass({
	render: function() {
		var style = {
      left: (this.props.left + this.props.index) + '%',
			backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('+this.props.slide.image +')'
    };

		return (
			<div className="slide" style={style}>
				<div className='slide-content'>
					<h2>{this.props.slide.title}</h2>
					<p>{this.props.slide.text}</p>
				</div>
			</div>
		);
	}
});

var Slider = React.createClass({
	getInitialState: function() {
    return {
			spacer: 0,
			slideCount: 0
		};
  },
	previous: function() {
		var left = this.state.spacer;
		if (left === 0) {
			this.setState({spacer: -1 * (this.props.slides.length - 1) * 100});
			return;
		}
		this.setState({spacer: left+=100});
	},
	next: function() {
		var left = this.state.spacer;
		if (left === -1 * (this.props.slides.length - 1) * 100) {
			this.setState({spacer: 0});
			return;
		}
		this.setState({spacer: left-=100});
	},
  render: function() {
		var self = this;

		var sliderNodes = this.props.slides.map(function (slide, index) {
      return (
          <SliderItem slide={slide} left={100 * index} index={self.state.spacer} />
        );
    }, this);
    return (
      <div className='slide-container'>
				{sliderNodes}
				<button className='prev' onClick={this.previous}><i className='fa fa-arrow-left'></i></button>
				<button className='next' onClick={this.next}><i className='fa fa-arrow-right'></i></button>
			</div>
    );
  }
});

var Slides = [
	{
		title: 'Testing w/ React Slider',
		text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		image: 'https://static.pexels.com/photos/8807/sopot-medium.jpg'
	},
	{
		title: 'Testing w/ React Slider',
		text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		image: 'https://static.pexels.com/photos/7360/startup-photos-large.jpg'
	},
	{
		title: 'Testing w/ React Slider',
		text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		image: 'https://static.pexels.com/photos/7055/desk-computer-imac-home-large.jpg'
	}
]


}
 export default slider;
