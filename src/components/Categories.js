import '../styles/Categories.css'
import { useState } from 'react'

function Categories({ setActiveCategory, categories, activeCategory }) {
	const [checked, setChecked] = useState([false])
	const handleChecked = (e) => {
		checked && setActiveCategory(e.target.value)
		setChecked(!checked)
	}
	return (
		<div className='lmj-categories'>
			<input type='checkbox' defaultChecked onChange={(e) => setActiveCategory('')} />
			<label>All</label>
			{categories.map((cat) => (
				<div className='lmj-categories-select' key={cat} >
					<input value={cat} type='checkbox' onChange={handleChecked} />
					<label>{cat}</label>
				</div>
			))
			}
		</div>
	)
}

export default Categories
