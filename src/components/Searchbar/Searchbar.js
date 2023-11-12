import { Component } from "react";
import toast from 'react-hot-toast';

export class Searchbar extends Component {
    state = {
        query: '',        
    }   

  handleSubmit = (e) => {
      e.preventDefault();      
      if (this.state.query.trim() === "") {
        toast.error("Please fill the field!");
        return;
        } 
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    };

  handleChange = (e) => {
    this.setState({ query: e.target.value});
  };
    
    render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
    
}