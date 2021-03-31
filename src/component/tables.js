import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from './Context';
import img from '../images/backgroundI.png';

class Tables extends Component {
	static contextType = AppContext;

	state = {
		users: [],
	};

	fetchUsers = () => {
		fetch('http://localhost/php_backend/get_users_details.php')
			.then((response) => {
				response.json().then(
					function (data) {
						if (data.success === 1) {
							this.setState({
								users: data.user.reverse(),
							});
						} else {
							this.context.post_show(false);
						}
					}.bind(this)
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	componentDidMount() {
		this.fetchUsers();
	}

	render() {
		let allUsers = this.state.users.map(
			({ id, name, username, email, isEditing }, index) => {
				return isEditing === true ? (
					<tr key={id}>
						<td>
							<input
								className="form-control"
								type="text"
								ref={(item) => (this.name = item)}
								defaultValue={id}
							/>
						</td>
						<td>
							<input
								className="form-control"
								type="text"
								ref={(item) => (this.name = item)}
								defaultValue={name}
							/>
						</td>
						<td>
							<input
								className="form-control"
								type="text"
								ref={(item) => (this.name = item)}
								defaultValue={username}
							/>
						</td>
						<td>
							<input
								className="form-control"
								type="email"
								ref={(item) => (this.email = item)}
								defaultValue={email}
							/>
						</td>
					</tr>
				) : (
					<tr key={id}>
						<td>{id}</td>
						<td>{name}</td>
						<td>{username}</td>
						<td>{email}</td>
					</tr>
				);
			}
		);

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
				<Row>
					<Col lg="8" md="5" sm="12" style={{ margin: '10% auto' }}>
						<Card>
							<Card.Header style={{ fontSize: '50px' }}>
								User Details
							</Card.Header>
							<Card.Body style={{ background: '#80ffaa' }}>
								<Table responsive="sm">
									<thead>
										<tr>
											<th>Id</th>
											<th>Names</th>
											<th>User names</th>
											<th>Emails</th>
										</tr>
									</thead>
									<tbody>{allUsers}</tbody>
								</Table>
								<div>
									<Link
										to="/"
										className="btn btn-primary"
										style={{
											width: '410px',
											height: '50px',
											fontSize: '25px',
											marginRight: '16px',
										}}
									>
										Login page
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
export default Tables;
