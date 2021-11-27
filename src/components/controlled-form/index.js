import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'



class ControlledForm extends Component {
    constructor(props) {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            touched: {
                firstName: false,
                lastName: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this)

    }

    handleInputChange(event) {
        // console.log('event.target.name', event.target.name)
        const name = event.target.name
        // console.log('event.target.value', event.target.value)
        this.setState({
            [name]: event.target.value
        })
    }

    handleOnBlur(name) {
        console.log(name)
        this.setState({
            touched: { ...this.state.touched, [name]: true }
        })
    }

    render() {

        console.log('this.state', this.state)
        return (
            <Form>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input
                        name="firstName"
                        onChange={this.handleInputChange}
                        onBlur={() => this.handleOnBlur('firstName')}
                        invalid={(this.state.touched.firstName === true && !this.state.firstName)}
                    />
                    {(this.state.touched.firstName === true && !this.state.firstName) ? (<div> Sorry you need to enter a first name</div>) : ''}

                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input name="lastName" onChange={this.handleInputChange} />
                    <div>You have entered {this.state.lastName}</div>
                </FormGroup>
            </Form>
        )
    }
}

export default ControlledForm