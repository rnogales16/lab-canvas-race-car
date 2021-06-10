window.onload = () => {
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');

	const background = new Background(ctx);
	const car = new Car(ctx, canvas.width / 2 - 25, canvas.height - 110);

	function startGame() {
		console.log('Game Started');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		background.draw();
		car.draw();
	}

	document.getElementById('start-button').onclick = () => {
		startGame();
	};
};
