import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    images: [],
    page: 1
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    const result = await ImageService.getImages(query, page);
    console.log(result);
  }

  onSubmit = (query) => {
    this.setState({query})
  }


  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        
      </>
    );
  }
}
