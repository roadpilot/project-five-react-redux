import React from 'react';
import Form from './StatefulForm_c'
import DisplayData from './StatefulFormDisplayData_c'
import { connect } from 'react-redux'
import { signup } from '../actions/session_a'
 
class ParentComponent extends React.Component {
  state = {
    username: "",
    password: "",
    name: "",
    errors: "TEST",
  }
  

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.props)
    this.props.signup(this.state)
      .then(response => {
        console.log("POST SIGNUP",(response===undefined))
        if (typeof response!=="undefined"){
          this.setState({
            ...this.state, "errors": response
          })
        }
        else {
          this.props.history.push('/')
        }
      })
      // .then(response => {
      //   console.log("STATE",this.state)
      // })
    //   .catch(errors => {
    //     console.log(errors)
    // })
  }
 
  // async handleSubmit(event){
  //   event.preventDefault()
  //   console.log(this.props)
  //   // const errors = await this.props.signup(event.target)
  //   // if (errors){return null}    
  //   console.log(this.state)
  // }
  
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}
 
// const mapDispatchToProps = (dispatch) => {
//   return {
//     signup: (formData) => dispatch(signup(formData))
//   }
// }

// export default ParentComponent;
export default connect(null,{signup})(ParentComponent)