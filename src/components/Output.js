import React from 'react'

export default function Output() {
  return (
    <div>
      {summary && (
  <div className="summary-output">
    <h3>Summary</h3>
    <p>{summary}</p>
  </div>
)}
    </div>
  )
}
