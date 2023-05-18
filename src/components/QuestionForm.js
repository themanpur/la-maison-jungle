import { useState } from 'react'
import '../styles/QuestionForm.css'


function QuestionForm() {
    const [inputValue, setInputValue] = useState('')
	function handleInput(e) {
		setInputValue(e.target.value)
	}
	function handleBlur() { 
		if(!inputValue.includes('@'))
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
							}
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input type='text' name='email' placeholder='Entrez votre mail' value={inputValue} onChange={handleInput} onBlur={handleBlur} />
		</footer>
	)
}

export default QuestionForm