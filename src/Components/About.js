import React from 'react'

export default function About(props) {
  let myStyle = {
     color: props.mode === 'dark'?'white':'#042743',
     backgroundColor: props.mode === 'dark'?'#042743':'white'
  }

  return (
    <div className='container' style={myStyle}>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About TextUtils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is a TextUtils App. It is created by using React. In this app you input some text and this app will tell you amount of words in it, amount of characters, and will show you the preview. You can use "Convert to Uppercase", "Convert to Lowercase", and "Clear Text" buttons to convert the text into Uppercase, Lowercase, or clear the text respectively.
          Developed by Shalom Shahzad
        </strong>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
