[![NPM](https://nodei.co/npm/react-float-button.png)](https://npmjs.org/package/react-float-button)

# react-float-button

react-float-button is a stuff make your button float.

# Demo
![Alt Text](https://media.giphy.com/media/l4EpbSsKWt3nupn4Q/giphy.gif)

# How to use
```
npm i react-float-button --save
```
```
import FloatGroup from 'react-float-button';

<FloatGroup style={{ margin: '0 10px' }} margin={80} delay={0.02}>
    <Button>You can put any children under FloatGroup</Button>
    <Button>Hello, world!</Button>
</FloatGroup>
```
# API
| Name | Type | Default	| Description |
| ------ | ------ | ------ | ------ |
| margin | number | 50 | The margin between each children |
| style | object | {} | Simple style |
| delay | number | 0.03 | Transition delay of each child |
