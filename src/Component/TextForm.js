import React, {useState} from 'react'

export default function TextForm() {

    const [text, setTaxt] = useState('Enter your Text Here');

    const changeToLower = () => {
        setTaxt(text.toLowerCase());
    }

    const typeInTextArea = (event) => {
        setTaxt(event.target.value);
    }

  return (
    <div className="container">
        <div className="form-group">
            <label className="my-4">Enter Your Text Here!</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={typeInTextArea} rows="5" value={text}></textarea>
            <button className="btn btn-primary my-3" onClick={changeToLower}>LowerCase</button>
        </div>
        <div>
            <h3>Your Text Summery</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
    </div>
  )
}
