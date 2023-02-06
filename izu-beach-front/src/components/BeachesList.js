import React, { Component } from "react";
import axios from "axios";

class BeachesList extends Component{
  constructor(props) {
      super(props);
      this.state = {
        beachlists: [],
      };
    }

  loadBeachesList() {
  axios
    .get("/api/v1/beaches")
    .then((res) => {
      this.setState({ beachlists: res.data });
      console.log(res.data);
    })
    .catch((error) => console.log(error));

  }

  componentDidMount() {
    this.loadBeachesList();
  }


  render(){
    return(
      <ul>
        {this.state.beachlists.map((beachlist) => {
          return (
            <li className="item" beachlist={beachlist} key={beachlist.id}>
              <label className="itemDisplay">{beachlist.name}</label>
            </li>
          );
        })}
      </ul>
    )
  }

}

export default BeachesList
