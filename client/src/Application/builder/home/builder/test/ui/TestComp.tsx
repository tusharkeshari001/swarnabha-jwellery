import React from 'react'
import '../style/TestCompStyle.css';

export const buildTestComp = () => {
    return <TestComp/>
}

const TestComp = () => {
  return (
    <div className="card">
        <div className="card-side front">
                <h1>Testing WebSocket</h1>
        </div>
        <div className="card-side back">
                <h1>Secondary purpose</h1>
        </div>
    </div>
    )
}
