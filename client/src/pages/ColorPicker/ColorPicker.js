import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'react-semantic-ui-range'
import 'semantic-ui-css/semantic.min.css';
import {Segment,Grid,Label,Input, Button, Container} from 'semantic-ui-react';

import './ColorPicker.css';

export default class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.state={
      value1: 5,
      value2: 5,
      value3: 5,
      value: 0,
      boxOneColor: "blue",
      boxTwoColor: "green",
      boxThreeColor: "red"
    }
  }

  handleValueChange(e, {value}){
    this.setState({
      value: value
    })
  }

  changeBoxOneColor = () => {
    this.setState({
      boxOneColor: "blue"
    })
  }



  render(){
    const settings = {
      start:2,
      min:0,
      max:10,
      step:1,
    }

    const boxOneStyle = {
      background: this.state.boxOneColor
    }
const boxTwoStyle = {
      background: this.state.boxTwoColor
    }
    const boxThreeStyle = {
      background: this.state.boxThreeColor
    }

    const red = this.state.value3;
    const blue = this.state.value1;
    const green  = this.state.value2;

    const boxStyle = {
      background: `rgb(${red}%, ${green}%, ${blue}%)`
    }

    return (
      <div>
      <Grid padded className= "buttons">
        <Grid.Column width={16}>
        <Segment>
        <Button
          id="box-one"
          style={boxOneStyle}
          onClick={this.changeColor}
          className="buttons"
        > 
        {this.state.value1}%
        </Button>
        </Segment>

      </Grid.Column>
      <Grid.Column width={16}>
        <Segment>
        <Button
          id="box-two"
          style={boxTwoStyle}
          onClick={this.changeColor}
          className="buttons"
        > 
        {this.state.value2}%
        </Button>
        </Segment>

      </Grid.Column>
      <Grid.Column width={16}>
        <Segment>
        <Button
          id="box-three"
          style={boxThreeStyle}
          onClick={this.changeColor}
          className="buttons"
        > 
        {this.state.value3}%
        </Button>
        </Segment>

      </Grid.Column>
      </Grid>
      <Grid padded>


        <Grid.Column width={16} >
          <Segment>
           <h1>Color Picker</h1>
            <p>
              <Slider color="blue" inverted={false}
                settings={{
                start: this.state.value1,
                min:0,
                max:100,
                step:10,
                onChange: (value) => {
                  this.setState({
                    value1:value
                  })
                }
              }}/>
            </p>
            <Label color="blue">{this.state.value1}</Label>
              <p>
              <Slider color="green" inverted={true}
                settings={{
                start: this.state.value2,
                min:0,
                max:100,
                step:10,
                onChange: (value) => {
                  this.setState({
                    value2:value
                  })
                }
              }}/>
            </p>
            <Label color="green">{this.state.value2}</Label>
              <p>
              <Slider color="red" inverted={false}
                settings={{
                start: this.state.value3,
                min:0,
                max:100,
                step:10,
                onChange: (value) => {
                  this.setState({
                    value3:value
                  })
                },
                value: this.state.value3
              }}/>
            </p>
            <Label color="red">{this.state.value3}</Label>
          </Segment>
        </Grid.Column>
       
        
     
       
      </Grid>


      <Grid padded >
        <Grid.Column width={16}>
        <Segment
        className="box"
        style={boxStyle}
        >

        </Segment>
      </Grid.Column>
      

      </Grid>

      </div>

      
    );
  }
  
}