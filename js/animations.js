/* Project flip cards: click / keyboard flips the tile like a placard.
   Clicks on the live-demo link are left alone so the link still opens. */
(function () {
	function init() {
		var cards = document.querySelectorAll('.flip-card');
		Array.prototype.forEach.call(cards, function (card) {
			card.addEventListener('click', function (e) {
				if (e.target.closest && e.target.closest('a')) return; // let the demo link work
				card.classList.toggle('flipped');
			});
			card.addEventListener('keydown', function (e) {
				if (e.target.closest && e.target.closest('a')) return;
				if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
					e.preventDefault();
					card.classList.toggle('flipped');
				}
			});
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
