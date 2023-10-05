import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    deckript: 'All categories'
                },
                {
                    key: 'quantum',
                    deckript: 'quantum computers'
                },
                {
                    key: 'semiconduction',
                    deckript: 'semiconduction computers'
                },
                {
                    key: 'mobile',
                    deckript: 'mobile computers'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.deckript}</div>
        ))}
      </div>
    )
  }
}

export default Categories
