import React, { Component } from 'react';
import axios from 'axios';
import giphy from '../images/giphy.gif';

export default class LoaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
      name: '',
      company: '',
      blog: '',
      avatar: '',
      loading: false,
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/tbatishcheva')
      .then((response) => {
        this.setState({
          name: response.data.name,
          company: response.data.company,
          blog: response.data.blog,
          avatar: response.data.avatar_url,
          //   loading: false,
          loading: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let data;
    if (this.state.loading) {
    //   data = <img alt="loading" data-src={require('../images/giphy.gif')} />;
      data = <img alt="loading" data-src={giphy} />;
    } else {
      data = (
        <div>
          <br />
                Name:
          {' '}
          {this.state.name}
          <br />
                Company:
          {' '}
          {this.state.company}
          <br />
                Blog:
          {' '}
          {this.state.blog}
          <br />
          <img alt="avatar" src={this.state.avatar} />
        </div>
      );
    }
    return (
      <div>
        {data}
      </div>
    );
  }
}
