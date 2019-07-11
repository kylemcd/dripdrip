import React, { Component, createContext } from 'react';

const DockContext = createContext({
  isModalVisible: '',
  activePanel: '',
  toggleModal: () => {}
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

  state = {
    isModalVisible: false,
    activePanel: null,
    toggleModal: this.toggleModal
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