import React from "react"

import json from "../data/works.json"

export default class MyWorks extends React.Component {
  
  state = {
    works: json.works
  }

  changeShowWorks = (e) => {
    const { target } = e;
    const { id } = target;
    document.querySelector(".list__item__active").classList.remove('list__item__active');
    target.classList.toggle('list__item__active');
    if (id === 'all') {
      this.setState({
        works: json.works
      })
    } else if (id === 'com') {
      this.setState({
        works: json.works.filter((i) => i.type === 'com')
      })
    } else {
      this.setState({
        works: json.works.filter((i) => i.type === 'own')
      })
    }
  }

  render() {
    console.log(json)
    return (
      <div className="row justify-content-between">
        <div className="col-xl-12">
          <ul onClick={this.changeShowWorks} className="my_works__list">
            <li id="all" className="list__item list__item__active">All projects</li>
            <li id="com" className="list__item">Commercial projects</li>
            <li id="own" className="list__item">Own projects</li>
          </ul>
        </div>
        {
          this.state.works.map(i => (
            <div className="col-xl-6 my_works__item">
              <img src={require(`../data/images/works/${i.img}`)} alt={i.name}/>
              <h4>{i.name}</h4>
              <span>{i.date}</span>
            </div>
          ))
        }
      </div>
    );
  }
}