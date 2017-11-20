import React, { Component } from 'react';
import PropTypes from 'prop-types';
import needleImage from "../assets/needle.svg";
import { TransitionGroup } from 'react-transition-group';
import { TweenLite, TweenMax } from 'gsap';

export default class Scale extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displayWeight: 0
		}
		this.calcDegrees = this.calcDegreesWithOffset.bind(this);
		this.runNeedleAnimation = this.runNeedleAnimation.bind(this);
		this.incrementWeightDisplay = this.incrementWeightDisplay.bind(this);
	}

	componentDidMount() {
		const needle = this.needle;
		const display = this.display;
		let rotationInDegrees = this.calcDegreesWithOffset(this.props.weight);
		this.runNeedleAnimation(needle, rotationInDegrees);
		this.incrementWeightDisplay(display);
	}

	calcDegreesWithOffset(weight) {
		//offset adjusts what angle the needle starts at
		let offset = -180;
		return weight - offset;
	}

	runNeedleAnimation(el, degrees) {
		let displayWeight = this.state.displayWeight;
    TweenLite
				 .to(el, 1.5, {rotation:degrees, transformOrigin:"50% 92%", ease:Power2.easeInOut}, false)
				 .delay(1);
	}

	incrementWeightDisplay(display) {
		let counter = {count: 0};
		TweenMax
				 .to(counter, 1.5, {count: "+=20", onUpdate: () => {
						this.setState({displayWeight: this.props.weight});
				 }, ease:Power2.easeInOut}, false)
				 .delay(1);
	}

	render() {
		return (
			<div id="wrapper">
			  <svg id="meter">
					<circle id="low" r="150" cx="50%" cy="50%" stroke="#000"
		strokeWidth="10" fill="none"></circle>
			  </svg>
				<TransitionGroup>
					<img ref={needle => this.needle = needle} id="meter-needle" key="needle-1"src={needleImage}></img>
					<div ref={display => this.display = display} key="number-increment"> {this.state.displayWeight} lbs</div>
				</TransitionGroup>
			</div>
		);
	}
}

Scale.PropTypes = {
	weight: PropTypes.number
}
