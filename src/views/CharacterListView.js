import React from "react";
import { connect } from "react-redux";
import {getCharacters} from '../actions';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters()
    // call our action
  }

  render() {
    if (this.props.fetching) {
      return 'loading...'
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <section className='hero-danger'>
          <div className='hero-body'>
            <h1 className='title'>Star Wars</h1>
          </div>
        </section>
        <div className='container' style={{ padding: '2rem 1rem'}}>
        <CharacterList characters={this.props.characters} />
        </div>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching
})

export default connect(
  mapStateToProps,
  {getCharacters}
   /* mapStateToProps replaces null here */,
    /* action creators go here */
)(CharacterListView);
