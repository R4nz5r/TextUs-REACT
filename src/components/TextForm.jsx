import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upercase", "success ")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success ')
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Text is clear now', 'success ')
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('Copied to clipboard', 'success')
    }
    const handleExtraSpace = () => {
        let newText = text.split("/[ ]+/");
        setText(newText.join(" "));
        props.showAlert('Extra space has been removed', 'success ')
    }
    const handleOnChanage = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className='container my-3'>
                    <h1 className='mb-4'>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            style={{
                                backgroundColor: props.mode === 'light' ? 'white' : '#445063',
                                color: props.mode === 'light' ? 'black' : 'white',
                            }}
                            placeholder='Enter your text...'
                            onChange={handleOnChanage}
                            value={text}
                            id="myBox"
                            rows="10"
                        >
                        </textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                </div>
                <div className="container my-3">
                    <h2>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} minites need to read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here..."}</p>
                </div>
            </div>

        </>
    )
}
