import React, { Component, createContext } from 'react';

export const DockContext = createContext({
  isModalVisible: '',
  activePanel: '',
  toggleModal: () => {},
  closeModal: () => {}
})

export class DockProvider extends Component {

  toggleModal = (payload) => {
    const { isModalVisible, activePanel } = payload;
    const { activePanel: lastActivePanel } = this.state;
    
    if(isModalVisible === false && activePanel !== lastActivePanel){
      this.setState({
        activePanel
      })
    } else {
      this.setState({
        activePanel,
        isModalVisible
      })
    } 
  }

  closeModal = () => {
    this.setState(({
      isModalVisible: false
    }))
  }

  state = {
    isModalVisible: false,
    activePanel: null,
    toggleModal: this.toggleModal,
    closeModal: this.closeModal
  }

  render(){
    const { children } = this.props;
    return (
      <DockContext.Provider value={this.state}>
        {children}
      </DockContext.Provider>
    )
  }
}

export const DockConsumer = DockContext.Consumer;