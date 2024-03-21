import React, { Component } from 'react'
import MessegersUI from './widget/messagers/MessegersUI'

export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center'>Chapter one : The beginning</h1>
        <MessegersUI/>
      </div>
    )
  }
}
