import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart, setIsActif}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	const addCart = cart.map(({ name, price, amount }, index) => (
		(amount > 0) && (<div key={`${name}-${index}`}>
			{name} {price}€ x {amount}
		</div>))) 
	{/*useEffect (() => {
		alert(addCart.amount)
	}, [addCart.amount])*/}

	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
		total === 0 && updateCart([])
	}, [total])
	
	useEffect (() => {
		if(total === 0 ){
			setIsActif(false)
		}
	}, [total])
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{
							(addCart.amount <= 0 ) ? addCart.splice(addCart.index, 1) : addCart
						}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart