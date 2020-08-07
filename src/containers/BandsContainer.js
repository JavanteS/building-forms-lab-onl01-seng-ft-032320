import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from "../components/BandInput"

class BandsContainer extends Component {
  
  
  
  renderbands = () => {
    return this.props.bands.map(band=><li>{band.name}</li>)
  }
  
  
  render() {
    
    return(
      <div>
        BandsContainer
        
        
        <div><BandInput addBand={this.props.addBand}/></div>
        <div>{this.renderbands()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: data => dispatch({ type: 'ADD_BAND', band: data})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);


