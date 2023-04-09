import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    isVisibleBtn: false,
    isEmpty: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const {
        photos,
        total_results,
        per_page,
        page: currentPage,
      } = await ImageService.getImages(query, page);
      console.log(photos);
      if (photos.length < 1) {
        this.setState({ isEmpty: true });
      }
      this.setState(prev => ({
        images: [...prev.images, ...photos],
        isVisibleBtn: currentPage < Math.ceil(total_results / per_page),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  onClickBtn = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, isLoading, isVisibleBtn, isEmpty } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        {isLoading && <div>Loading...</div>}
        <Grid>
          {images.map(image => {
            const {
              id,
              alt,
              src: { small },
            } = image;
            return (
              <GridItem key={id}>
                <CardItem>
                  <img src={small} alt={alt} />
                </CardItem>
              </GridItem>
            );
          })}
        </Grid>

        {isVisibleBtn && <Button onClick={this.onClickBtn}>Load more</Button>}
        {isEmpty && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
      </>
    );
  }
}
