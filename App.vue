<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	page {
		background-color: #111111
	}

	/*每个页面公共css */
	._GCENTER {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	._PCENTERY {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	._PCENTERX {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}

	._BACKGROUND {
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}



	button::after {
		border: none;
	}

	button {
		background-color: transparent;
		padding-left: 0;
		padding-right: 0;
		border-radius: 0;
		line-height: inherit;
		margin: 0;
	}
</style>