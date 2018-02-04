import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related'
import ModalContainer from '../../widgets/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/container/handle-error';
import VideoPlayer from '../../player/container/video-player';

class Home extends Component {
  state = {
    modalVisible: false,
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  handleCloseModalClick = (event) => {
    this.setState({
      modalVisible: false,
    })
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />

          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}
            />
          {
            this.state.modalVisible &&
            <ModalContainer >
              <Modal
              handleClick = {this.handleCloseModalClick}
              >
                <VideoPlayer
                  autoPlay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }

      </HomeLayout>
      </HandleError>

    )
  }
}

export default Home