#plate-calculator
A library that calculates how many plates you need to put on a barbell to reach a target weight. It can take into 
account the weights that you actually own.

Useable from client or server side.

## Installation

### NPM
`npm install plate-calculator --save-dev`

### Browser
Run `npm run build` and copy the `plate-calculator.js` file from the `dist` directory. Place it wherever you like in 
your application and include it like normal.

## Usage
Regardless how you include the script to your app, you'll end up with a `plateCalculator` object with a 
`calculate` function.

The function takes two parameters:
`plateCalculator.calculate(weight : Number, options : Object)`;

Weight should be the weight you want to put on the bar.

Options are passed in a second parameter. They have the following defaults:
```
{
	set : weightSets.pounds,
	barbellWeight : 45,
	weightLimits : {},
	addedPlates : [],
}

```
#### set : Array
An array of plate sizes. Defaults to standard pound plates. Setting this variable will override the list of plates 
entirely.

#### returnClosest : Boolean = true
By default the calculator will return the closest weight that is possible with the given set. For instance, if you 
put in 46 pounds it will calculate to 45 if you don't have .5 pound plates.

If you set this to false, the calculator will throw an error instead when matching the entered weight is impossible.

#### barbellWeight : Number
The weight of the barbell you're using. Standard olympic barbell (45 pounds) is assumed, but you can change it if 
you're using a non standard bar (such as a curl bar)

#### weightLimits : Object
An object that tells the system what plates you have available.

This is an object in the shape `{ 45:2, 35:0}` where the plate weight is the key and the quantity that 
you have available is the value. In the given case, you have two 45 pound plates and 0 35 pound plates.

Note: Null is assumed to be infinite, but 0 is treated as 0. Don't get them confused!gst

#### addedPlates : Array
Any plates that you own that aren't part of the standard set. For instance, if you own half pound plates:
`addedPlates : [.5]`

The calculate function returns an object in the following shape:
```
{"plates":[{"plateWeight":45,"qty":4}],"closestWeight":225}

```

### Node
`const plateCalculator = require('plate-calculator');`

### Browser
If you've included plate-calculator as a script, then you can run `plateCalculator.calculate()` as a global function.

### React / ES6
`import plateCalculator from 'plate-calculator';`

## Examples
Better usageexamples will be live at a later date. For now you can run `npm start` and a webpack server will launch a 
very (very)
 simple demo.
