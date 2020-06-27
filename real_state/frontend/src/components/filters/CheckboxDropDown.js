import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSearchFilter } from "../../actions/houses.js";

class CheckboxDropDown extends Component {
  filter = (value) => {
    var dict = this.props.filter.home_type;
    var index = dict.indexOf(`${value}`);
    index < 0 ? dict.push( value ) : dict.splice(index, 1);
    
    this.props.updateFilter(this.props.filter);
  };

  generateButtons() {
    const divElements = [""];
    for (var i = 0; i < this.props.options.length; i++) {
      divElements.push(
        <div key={`hometype_${this.props.options[i]}`} className="form-group ml-3">
          <div className="form-check">
                  <input
                      onClick={e => this.filter(e.target.value)}
              value={this.props.options[i]}
              type="checkbox"
              className="form-check-input"
              id={`filter_home_type_${i}`}
            />
            <label
              className="form-check-label"
              htmlFor={`filter_home_type_${i}`}
            >
              {this.props.options[i]}
            </label>
          </div>
        </div>
      );
    }
    return divElements;
  }

    render () {
      
    const options = this.generateButtons();

    return (
      <div className="dropdown mr-2 mt-3">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="houseTypeFilter"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span>
            <img
              src="../static/images/houseType.png"
              height="15px"
              className="mb-1 mr-2"
            />
            {this.props.title}
          </span>
        </button>

        <div className="dropdown-menu" aria-labelledby="houseTypeFilter">
          {options}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  houses: state.housesReducer.houses,
  search: state.housesReducer.search,
  filter: state.housesReducer.filter,
});

const mapDispatchToProps = {
  updateFilter: updateSearchFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxDropDown);
