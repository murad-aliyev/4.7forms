import React,{Component} from 'react'
import './style.css'

class SubscribeButton extends Component {
 
  state = { name: "",
            surname: "",
            secondname: "", 
            adress: "",
            phoneNumber: "",
            isValid: true,
            name1: "none",
            surname1: "none",
            secondname1: "none",
            adress1: "none",
            phoneNumber1: "none"

          };

  handleChange = (event) => {
      this.setState({[ event.target.name] : event.target.value});
      if(event.target.value.length<5){
        this.setState({[event.target.name+'1'] : "display"});
      }else{
        this.setState({[event.target.name+'1'] : "none"}); 
      }
  }

  handleIsValid = () => {
    {if(this.state.name1=="none" && this.state.surname1=="none" && this.state.secondname1=="none" && this.state.adress1=="none" && this.state.phoneNumber1=="none"){
      this.setState({ isValid: false });
    }else{
      this.setState({ isValid: true });
    }
  }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Müvəffəqiyyətlə göndərildi")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleIsValid} className='user'>
  <label> 
    Ad:
    <br></br>   
    <input className="user-name" id='name' name="name" onChange={this.handleChange} type="text"/>
    <p id="name1" className={this.state.name1}>*Simvol sayı 4-dən çox olmalıdır</p>
  </label>
  <br></br>
  <br></br>
  <label>
    Soyad:
    <br></br> 
    <input className="series" id="surname" name="surname" onChange={this.handleChange} type="text"/>
    <p id="surname1" className={this.state.surname1}>*Simvol sayı 4-dən çox olmalıdır</p>
  </label>
  <br></br>
  <br></br> 
  <label> 
    Ata adı:  
    <br></br> 
    <input className="user-age" id="secondname" name="secondname" onChange={this.handleChange} type="text"/>
    <p id="secondname1" className={this.state.secondname1}>*Simvol sayı 4-dən çox olmalıdır</p>
  </label>
  <br></br>
  <br></br>
  <label>
    Ünvan:
    <br></br>
    <input className="e-mail" id="adress" name="adress" onChange={this.handleChange} type="text"/>
    <p id="adress1" className={this.state.adress1}>*Simvol sayı 4-dən çox olmalıdır</p>
  </label>
  <br></br>
  <br></br>
  <label>
   Telefon nömrəsi:
   <br></br>
    <input className="pNumber" id="phoneNumber" name="phoneNumber" onChange={this.handleChange} type="number"/>
    <p id="phoneNumber1" className={this.state.phoneNumber1}>*Simvol sayı 4-dən çox olmalıdır</p>
  </label>
  <br></br>
  <br></br>
  <button disabled={this.state.isValid} type='submit'>Göndər</button>
      </form>
    );
  }
 }

 export default SubscribeButton