import React,{Component} from 'react';
export class Register extends Component{
constructor()
{
super();
this.state={
username:"",
firstname:"",
lastname:"",
email:"",
age:"",
gender:""
}
}
handleInput=(e)=>
{
console.log(e.target.value);
let currentState=this.state;
currentState[e.target.name]=e.target.value;
this.setState(currentState)
}
render()
{
return <div><h1>REGISTER</h1>
<form>
<input type="text" placeholder="username" name="username" onChange={this.handleInput}/><br></br>
<input type="text" placeholder="firstname" name="firstname" onChange={this.handleInput}/><br></br>
<input type="text" placeholder="lastname" name="lastname" onChange={this.handleInput}/><br></br>
<input type="email" placeholder="Email" name="email" onChange={this.handleInput}/><br></br>
<input type="number" placeholder="Age" name="age" onChange={this.handleInput}/><br></br>
<input type="radio" id="male" name="gender" value="male" onChange={this.handleInput}/>
<label for="male">Male</label><br></br>
<input type="radio" id="female" name="gender" value="female" onChange={this.handleInput}/>
<label for="female">Female</label><br></br>
<button type="button" onClick={this.handleInput}>Register</button>
</form>

<h1>{this.state.username}</h1>
<h1>{this.state.firstname}</h1>
<h1>{this.state.lastname}</h1>
<h1>{this.state.email}</h1>
<h1>{this.state.age}</h1>
<h1>{this.state.gender}</h1>
</div>
}
}