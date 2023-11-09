import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Loading
