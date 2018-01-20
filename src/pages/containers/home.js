import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related'
import ModalContainer from '../../widgets/modal'
import Modal from '../../widgets/components/modal'

class Home extends Component {
  state = {
    modalVisible: false,
    handleError: false,
  }

  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    })
  }

  handleCloseModalClick = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  componentDidCatch(error, info) {
    this.setState({
      handleError= true,
    })
  }
  render() {
    return (
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

            <h1> Hola soy un portal</h1>
            </Modal>
          </ModalContainer>
        }

      </HomeLayout>
    )
  }
}

export default Home