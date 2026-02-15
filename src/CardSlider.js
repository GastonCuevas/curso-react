import React, { Component } from "react";
import ValentineCard from "./card";

class CardSlider extends Component {
	constructor(props) {
		super(props);
		this.state = { index: 0 };
	}

	next = () => {
		const { cards } = this.props;
		this.setState((prev) => ({
			index: Math.min(prev.index + 1, cards.length - 1),
		}));
	};

	prev = () => {
		this.setState((prev) => ({
			index: Math.max(prev.index - 1, 0),
		}));
	};

	goTo = (i) => {
		const { cards } = this.props;
		this.setState({ index: Math.max(0, Math.min(i, cards.length - 1)) });
	};

	renderDots() {
		const { cards } = this.props;
		const { index } = this.state;

		return (
			<div style={styles.dots}>
				{cards.map((_, i) => (
					<button
						key={i}
						onClick={() => this.goTo(i)}
						style={{
							...styles.dot,
							opacity: i === index ? 1 : 0.35,
							transform: i === index ? "scale(1.05)" : "scale(1)",
						}}
						aria-label={`Ir a la card ${i + 1}`}
					/>
				))}
			</div>
		);
	}

	render() {
		const { cards } = this.props;
		const { index } = this.state;

		const current = cards[index];
		const isLast = index === cards.length - 1;
		const isFirst = index === 0;

		return (
			<div style={styles.screen}>
				{this.renderDots()}

				<ValentineCard
					eyebrow={current.eyebrow}
					icon={current.icon}
					title={current.title}
					body={current.body}
					backgroundImageUrl={current.backgroundImageUrl}
					backgroundGradient={current.backgroundGradient}
					overlay={current.overlay}
					overlayOpacity={current.overlayOpacity}
					align={current.align}
					variant={current.variant}
					size={current.size}
					footer={
						<div style={styles.footerRow}>
							<button
								onClick={this.prev}
								disabled={isFirst}
								style={{ ...styles.btn, opacity: isFirst ? 0.4 : 1 }}
							>
								← Atrás
							</button>

							<button
								onClick={this.next}
								disabled={isLast}
								style={{ ...styles.btn, opacity: isLast ? 0.4 : 1 }}
							>
								{isLast ? "Fin ✨" : "Deslizá →"}
							</button>
						</div>
					}
				/>
			</div>
		);
	}
}

const styles = {
	screen: {
		minHeight: "100vh",
		background: "#0b0b12",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	dots: {
		display: "flex",
		gap: 8,
		justifyContent: "center",
		paddingTop: 18,
		paddingBottom: 6,
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 999,
		border: "1px solid rgba(255,255,255,.35)",
		background: "rgba(255,255,255,.85)",
		cursor: "pointer",
	},
	footerRow: {
		display: "flex",
		gap: 10,
		justifyContent: "center",
		width: "100%",
	},
	btn: {
		padding: "10px 14px",
		borderRadius: 16,
		border: "1px solid rgba(255,255,255,.25)",
		background: "rgba(255,255,255,.12)",
		color: "white",
		cursor: "pointer",
		backdropFilter: "blur(10px)",
	},
};

export default CardSlider;
