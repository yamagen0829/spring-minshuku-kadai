const stripe = Stripe('pk_test_51PUq0jFSM1uSKiJ0JBLJ3sysAhyanZOVZ59IzigAE37h2P2ru4x8MupM8pkBfY7zbSu4RKTEeQAAHM73QgdytHGu00Q0SApZAq');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});