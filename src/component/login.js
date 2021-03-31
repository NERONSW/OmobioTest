import React, { Component } from 'react';
import { Form, Row, Col, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from './Context';
import img from '../images/backgroundI.png';

function loginAlert() {
	alert('Login successfull!');
}

class App extends Component {
	static contextType = AppContext;

	UserLogin = () => {
		const { uname } = this.state;
		const { passwrd } = this.state;

		fetch('http://localhost/php_backend/user_login.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: uname,
				password: passwrd,
			}),
		})
			.then((response) => response.json())
			.then((json) => {
				Alert.alert(json.msg);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	render() {
		return (
			<div
				className="content"
				style={{
					background: `url(${img})`,
					backgroundSize: 'cover',
					height: '100vh',
					overflow: 'hidden',
				}}
			>
				<Row styles={{ backgroundImage: `url(${img})` }}>
					<Col lg="4" md="5" sm="12" style={{ margin: '10% auto' }}>
						<Card className="p-3">
							<Card.Header style={{ fontSize: '50px' }}>Login here</Card.Header>
							<Card.Body style={{ background: '#80ffaa', textAlign: 'left' }}>
								<Form onSubmit={this.UserLogin}>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<input
											type="text"
											name="username"
											ref={(val) => (this.username = val)}
											className="form-control"
											placeholder="Username"
										/>
										<Form.Text className="text-muted">
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<input
											type="password"
											name="password"
											ref={(val) => (this.password = val)}
											className="form-control"
											placeholder="Password"
										/>
									</Form.Group>

									<div>
										<button
											type="submit"
											className="btn btn-primary"
											onClick={loginAlert}
											style={{
												width: '410px',
												height: '50px',
												fontSize: '25px',
											}}
										>
											Login
										</button>
									</div>
									<br></br>
									<div>
										<Link
											to="/table"
											className="btn btn-primary"
											style={{
												width: '410px',
												height: '50px',
												fontSize: '25px',
											}}
										>
											Go to Tables
										</Link>
									</div>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
export default App;
