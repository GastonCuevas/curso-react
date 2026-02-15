import React, { Component } from "react";

class YouTubeMusic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ready: false,
			playing: false,
			volume: 50
		};

		this.player = null;
	}

	componentDidMount() {
		// Cargar script de YouTube si no existe
		if (!window.YT) {
			const tag = document.createElement("script");
			tag.src = "https://www.youtube.com/iframe_api";
			document.body.appendChild(tag);
		}

		window.onYouTubeIframeAPIReady = this.createPlayer;
	}

	createPlayer = () => {
		this.player = new window.YT.Player("yt-player", {
			height: "1",
			width: "1",
			videoId: this.props.videoId,
			playerVars: {
				autoplay: 0,
				controls: 0,
				loop: 1,
				playlist: this.props.videoId,
				modestbranding: 1
			},
			events: {
				onReady: () => {
					this.setState({ ready: true });
					this.player.setVolume(this.state.volume);
				}
			}
		});
	};

	togglePlay = () => {
		if (!this.player) return;

		if (this.state.playing) {
			this.player.pauseVideo();
			this.setState({ playing: false });
		} else {
			this.player.playVideo();
			this.setState({ playing: true });
		}
	};

	changeVolume = (e) => {
		const volume = parseInt(e.target.value, 10);
		this.setState({ volume });
		if (this.player) {
			this.player.setVolume(volume);
		}
	};

	render() {
		const { playing, volume } = this.state;

		return (
			<div style={styles.container}>
				<div id="yt-player" style={{ position: "absolute", opacity: 0 }} />

				<button onClick={this.togglePlay} style={styles.button}>
					{playing ? "⏸ Pausar" : "🎵 Activar música"}
				</button>

				<input
					type="range"
					min="0"
					max="100"
					value={volume}
					onChange={this.changeVolume}
					style={styles.slider}
				/>
			</div>
		);
	}
}

const styles = {
	container: {
		position: "fixed",
		top: 15,
		left: "50%",
		transform: "translateX(-50%)",
		zIndex: 999999,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		padding: 12,
		borderRadius: 16,
		background: "rgba(0,0,0,.75)",
		backdropFilter: "blur(10px)",
		border: "1px solid rgba(255,255,255,.2)",
		boxShadow: "0 8px 32px rgba(0,0,0,.4)"
	},
	button: {
		padding: "10px 16px",
		borderRadius: 12,
		border: "1px solid rgba(255,255,255,.3)",
		background: "rgba(255,255,255,.15)",
		color: "white",
		cursor: "pointer",
		fontSize: "14px",
		fontWeight: "500",
		transition: "all 0.2s ease",
		whiteSpace: "nowrap"
	},
	slider: {
		width: 120,
		cursor: "pointer"
	}
};

export default YouTubeMusic;
