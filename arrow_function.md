# Enter your title here




Starting in 2015 with the ECMA ES6 Standard (Google it), Javascript added a new way to declare functions.  "Arrow functions" (or "Fat arrow functions") were introduced.  This new syntax for declaring functions produced a few differences in how functions work.  Although they are "syntactically more compact", they have some other significant contrasts to the pre-ES6 "regular functions". You can see the fine details in the MDN documentation but I have taken a few of what I consider as the key differences and tabulated them below.  There are a TON of resources and blog posts also available and while some of what I show below is based on what I was able to learn from them, I thought it would be helpful to present the information in a table for side-by-side comparison.  I hope you find this helpful.  Researching this gave me a greater understanding of the differences and, when choosing between regular functions and arrow functions, which is the best choice for the situation. 

```

```
<style>
td {vertical-align:top}
</style>
<table style="width: 900">
  <tr>
	<td>&nbsp;</td>
	<td>Regular functions</td>
	<td>Arrow Functions </td>
  </tr>
  <tr>
	<td>Syntax</td>
	<td>
<pre>
function multiply(x, y) { 
  return x &ast; y
}
</pre>
	</td>
	<td>
<pre>
const multiply = (x, y) => { 
  return x &ast; y
}

// or with a return statement (needs curly brackets) //
const multiply = (x, y) => { return x &ast; y}

// or without a return statement (no curly brackets) //
const multiply = (x, y) => x &ast; y

// or with only one argument (no parentheses around arguments) //
const multiply = x => x &ast; 3

// no arguments would need either () or _ //
</pre>
	</td>
  </tr>
<tr>
<td>Returning values</td>
<td>Regular functions require the "return" statement or an expression to evaluate.  If the return statement is missing, or there’s no expression after the return statement, the regular function implicitely returns "undefined".</td>
<td>
If the arrow function contains one expression, and you omit the function’s curly braces, then the expression is implicitly returned. There is no need for the "return" statement.
</td>
</tr>
<tr>
	<td>"this" value (aka the execution context)</td>
	<td>
	  Dynamic based on invocation:
	<ol>
	  <li>During a simple invocation the value of "this" equals to the global 
	  ("window") object (or undefined if the function runs in strict mode):<br />
<pre>
function myFunction() {
    console.log(this);
}
	  
// Simple invocation
myFunction(); // logs global object (window)
</pre>
		</li>
		<li>During a method invocation the value of "this" is the object owning the 
	  method:<br>
		<pre>
const myObject = {
  method() {
    console.log(this);
  }
};

// Method invocation
myObject.method(); // logs myObject
</pre>
</li>
	  <li>During an indirect invocation using call, apply, it is the 
	  first argument supplied:
		<br>
<pre>
function myFunction() {
  console.log(this);
}

const myContext = { value: 'A' };

myFunction.call(myContext);  // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }
</pre>
		</li>
	  <li>During a constructor invocation using the "new" keyword "this" equals to the 
	  newly created instance:</li>
	</ol>
	</td>
	<td>The arrow function doesn’t define its own "this" execution context.<br />
	No matter how or where being invoked, 
	"this" value inside of an arrow 
	function always equals "this" value from the outer function:</td>
  </tr>
  <tr>
  <td>Constructors</td>
  <td>Regular functions created using "function" declarations or expressions are 
  constructible and callable. They can be constructed using the "new" keyword:<br />
<pre>
function Obj (color) {
   this.color = color
}

const blueObj = new Obj('blue');
console.log(blueObj.color); // =&gt; blue
</pre>
</td>
   <td>Arrow functions are 
  not constructible or callable. They can not be constructed using the "new" keyword: 
  an arrow function, throws an error:<br />
<pre>
const Obj = (color) =&gt; {
   this.color = color
}
	
const blueObj = new Obj('blue'); // =&gt; "TypeError: Obj is not a constructor".
</pre>
</td>
  </tr>
</table>


