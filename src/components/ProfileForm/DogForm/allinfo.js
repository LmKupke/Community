import React, { Component } from "react";
class Allinfo extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { dogs } = this.props;
    return (
      <div className="pricing-header px-3 py-3  mx-auto text-center">
        <h2>
          Your Dog's Profile
          {dogs != null ? (
            dogs.map((val, idx) => {
              console.log(val);
              return (
                <div>
                  Dog Name: <b>{val.dogName}</b>
                  <br />
                  Dog Age: <b>{val.age}</b>
                  <br />
                  Dog Breed: <b>{val.breed}</b>
                  <br />
                </div>
              );
            })
          ) : (
            <div>No Dog</div>
          )}
        </h2>
      </div>
    );
  }
}
export default Allinfo;
