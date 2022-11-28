import React,{Component} from 'react'
import './style.css'

class SubscribeButton extends Component {
 
  state = { name: "",
            surname: "",
            secondname: "", 
            adress: "",
            phoneNumber: "",
            isValid: true,
            pclassone: "none",
            pclasstwo: "none"
          };

  handleChange = (event) => {
      this.setState({[ event.target.name] : event.target.value});
      // if(event.target.value.length<5){
      //   this.setState({[this.getElementById(event.target.name+"1").className] : "display"}); 
        
      // }else{
      //   this.setState({[this.getElementById(event.target.name+"1").className] : "none"}); 

      // }
  }

//   handleClick = (event) => {

//     alert("Müvəffəqiyyətlə göndərildi");
// }

  handleIsValid = (event) => {
    this.setState({ ischecked: !this.state.ischecked });
  }

  handleClick1 = () => this.setState({ name: ""});
  handleClick2 = () => this.setState({ email: ""});


  handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Müvəffəqiyyətlə göndərildi")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='user'>
  <label>
  <p>{JSON.stringify(this.state)}</p>  
    Ad:
    <br></br>   
    <input className="user-name" id='name' name="name" onChange={this.handleChange} type="text"/>
    <p id="name1" className={this.state.pclassone}>*Simvol sayı 4-dən çox olmalıdır</p>
  </label>
  <br></br>
  <br></br>
  <label>
    Soyad:
    <br></br> 
    <input className="series" id="surname" name="surname" onChange={this.handleChange} type="text"/>
    <p id="surname1" className={this.state.pclasstwo}>*Simvol sayı 4-dən çox olmalıdır</p>
  </label>
  <br></br>
  <br></br> 
  <label> 
    Ata adı:  
    <br></br> 
    <input className="user-age" id="secondname" name="secondname" onChange={this.handleChange} type="text"/>
  </label>
  <br></br>
  <br></br>
  <label>
    Ünvan:
    <br></br>
    <input className="e-mail" id="adress" name="adress" onChange={this.handleChange} type="text"/>
  </label>
  <br></br>
  <br></br>
  <label>
   Telefon nömrəsi:
   <br></br>
    <input className="pNumber" id="phoneNumber" name="phoneNumber" onChange={this.handleChange} type="text"/>
  </label>
  <br></br>
  <br></br>
  <button disabled={this.state.isValid} type='submit'>Göndər</button>
      </form>
    );
  }
 }

 export default SubscribeButton