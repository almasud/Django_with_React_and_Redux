import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMyApps, deleteMyApp } from "../../actions/myApps";

export class MyApps extends Component {
  static propTypes = {
    myApps: PropTypes.array.isRequired,
    getMyApps: PropTypes.func.isRequired,
    deleteMyApp: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getMyApps();
  }

  render() {
    return (
      <Fragment>
        <h2>MyApp List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.myApps.map(myApp => (
              <tr key={myApp.id}>
                <td>{myApp.id}</td>
                <td>{myApp.name}</td>
                <td>{myApp.email}</td>
                <td>
                  <button
                    onClick={this.props.deleteMyApp.bind(this, myApp.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  myApps: state.myApps.myApps
});

export default connect(
  mapStateToProps,
  { getMyApps, deleteMyApp }
)(MyApps);
