import React, {useState}  from 'react';
import Button from './Button';
import {
	handleCapitalizeClick,
	handleLowerClick,
	handleClearTextClick,
  handleCopyTextClick,
  handleRemoveExtraSpaces
} from '../utils/textUtils';

export default function TextForm({
  isDarkMode = false,
}) {
	const [text, setText] = useState('Your text input goes here');
  let textAreaClasses = `form-control ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`;

	const handleTextChange = (event) => {
		setText(event.target.value);
	};

	return (
		<>
			<div className='my-3'>
				<h1>Enter text input below</h1>
				<div className='col-12'>
					<textarea
						className={textAreaClasses}
						rows='8'
						id='textBox'
						onChange={handleTextChange}
						value={text}
					/>
					<Button label='Capitalize' action={() => handleCapitalizeClick(text, setText) } />
					<Button label='Lower Case' action={() => handleLowerClick(text, setText)} />
					<Button label='Clear Text' action={() => handleClearTextClick(setText)} />
          <Button label='Copy Text' action={() => handleCopyTextClick} />
          <Button label='Remove Extra Spaces' action={() => handleRemoveExtraSpaces(text, setText)} />
				</div>
			</div>
			<div className='container'>
				<h2>Text Summary</h2>
				<p>
					{text.split(' ').length} words and {text.length} characters
				</p>
				<p>{0.008 * text.split(' ').length} minutes read</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}
