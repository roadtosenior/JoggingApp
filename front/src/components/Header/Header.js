
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router";

import { login } from '../../utils/functions';

class Header extends Component{
    state = {loginEmail: null, loginPassword: null}

    handleChangeLoginEmail(event) {
        this.setState({
            loginEmail: event.target.value
        })
    }

    handleChangeLoginPassword(event) {
        this.setState({
            loginPassword: event.target.value
        })
    }

    async logOut(){
        try {
          const response = await fetch('/api/authentication',
            {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            });
            if (response.status === 200){
              alert('LogOut');
              this.props.history.push('/');
            }
          } catch (error) {
            alert('Произошла ошибка в ходе авторизации!');
            console.error(error);
          }
    }

    render(){
        return (
            <Row>
                <Col>Jogging App</Col>
                {
                    this.props.location.pathname === "/" ?
                    <>
                        <Col>
                        <Form.Group>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={this.state.loginEmail}
                            onChange={this.handleChangeLoginEmail.bind(this)}
                        />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={this.state.loginPassword}
                                onChange={this.handleChangeLoginPassword.bind(this)}
                            />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Button
                            variant="outline-secondary"
                            onClick={() => login(this.state.loginEmail, this.state.loginPassword, this.props.history)}
                        >
                            Log in
                            {/*<Link to="/records/">Log in</Link>*/}
                        </Button>
                        </Col>
                    </>
                    :
                    <Button variant="outline-secondary" onClick={() => this.logOut()}>LogOut</Button>
                }

            </Row>
        )
    }
}

export default withRouter(Header);