import React,{Component} from 'react'
import './style.css'

class SubscribeButton extends Component {
 
  state = { name: "Murad",
            surname: "murad.aliev.2003m@gmail.com",
            secondname: "12345678", 
            adress: "",
            phoneNumber: "",
            isValid: true,
            name1: "class",
            surname1: "murad.aliev.2003m@gmail.com",
            secondname1: "12345678", 
            adress1: "",
            phoneNumber1: ""
          };

  handleChange = (event) => {
      this.setState({[ event.target.name] : event.target.value});

  }

  handleClick = (event) => {

    alert("Müvəffəqiyyətlə göndərildi");
}

  handleIsValid = (event) => {
    this.setState({ ischecked: !this.state.ischecked });
  }

  handleClick1 = () => this.setState({ name: ""});
  handleClick2 = () => this.setState({ email: ""});
  handleClick3 = () => this.setState({ password: "" });


  handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Müvəffəqiyyətlə göndərildi")
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit} className='user'>
        
  <label>
  <p>{JSON.stringify(this.state)}</p>  
    Ad:
    <br></br>   
    <input class="user-name" id='name' name="name" onChange={this.handleChange} type="text"/>
    <p>*Simvol sayı 5-dən çox olmalıdır</p>
  </label>
  <br></br>
  <br></br>
  <label>
    Soyad:
    <br></br> 
    <input class="series" id="surname" name="surname" onChange={this.handleChange} type="text"/>
  </label>
  <br></br>
  <br></br> 
  <label> 
    Ata adı:  
    <br></br> 
    <input class="user-age" id="secondname" name="secondname" onChange={this.handleChange} type="text"/>
  </label>
  <br></br>
  <br></br>
  <label>
    Ünvan:
    <br></br>
    <input class="e-mail" id="adress" name="adress" onChange={this.handleChange} type="text"/>
  </label>
  <br></br>
  <br></br>
  <label>
   Telefon nömrəsi:
   <br></br>
    <input class="pNumber" id="phoneNumber" name="phoneNumber" onChange={this.handleChange} type="text"/>
  </label>
  <br></br>
  <br></br>
  <button disabled={this.state.isValid} type='submit'>Göndər</button>
      </form>
    );
  }
 }

 export default SubscribeButton