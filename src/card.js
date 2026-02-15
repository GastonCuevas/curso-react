import React, { Component } from "react";
import "./ValentineCard.css";

class ValentineCard extends Component {
	static defaultProps = {
		overlay: true,
		overlayOpacity: 0.35,
		align: "center", // left | center | right
		size: "lg", // md | lg
		variant: "glass", // glass | solid
		maxWidth: 560,
		backgroundGradient:
			"linear-gradient(135deg, rgba(255,80,150,.22), rgba(120,90,255,.18), rgba(20,20,35,.65))",
	};

	handleKeyDown = (e) => {
		const { onClick } = this.props;
		if (!onClick) return;
		if (e.key === "Enter" || e.key === " ") onClick();
	};

	render() {
		const {
			title,
			body,
			eyebrow,
			icon,
			footer,
			backgroundImageUrl,
			backgroundGradient,
			overlay,
			overlayOpacity,
			align,
			size,
			variant,
			maxWidth,
			onClick,
			ariaLabel,
		} = this.props;

		const clickable = typeof onClick === "function";
		const classes = [
			"vc-wrap",
			clickable ? "vc-clickable" : "",
			`vc-align-${align}`,
			`vc-size-${size}`,
			`vc-variant-${variant}`,
		]
			.filter(Boolean)
			.join(" ");

		return (
			<div className="vc-outer">
				<div
					className={classes}
					style={{ maxWidth: maxWidth }}
					role={clickable ? "button" : undefined}
					tabIndex={clickable ? 0 : undefined}
					aria-label={clickable ? ariaLabel || title || "Card" : undefined}
					onClick={onClick}
					onKeyDown={this.handleKeyDown}
				>
					{/* Background image */}
					{backgroundImageUrl && (
						<div
							className="vc-bg"
							style={{ backgroundImage: `url(${backgroundImageUrl})` }}
						/>
					)}

					{/* Gradient */}
					<div className="vc-gradient" style={{ background: backgroundGradient }} />

					{/* Overlay */}
					{overlay && (
						<div
							className="vc-overlay"
							style={{ opacity: overlayOpacity }}
						/>
					)}

					{/* Content */}
					<div className="vc-content">
						<div className="vc-top">
							{icon ? <div className="vc-icon">{icon}</div> : <div />}
						</div>

						<div className="vc-spacer" />

						<div className="vc-main">
							{eyebrow && <div className="vc-eyebrow">{eyebrow}</div>}
							{title && <h2 className="vc-title">{title}</h2>}
							{body && <div className="vc-body">{body}</div>}
						</div>

						{footer && <div className="vc-footer">{footer}</div>}
					</div>

					<div className="vc-glow" />
				</div>
			</div>
		);
	}
}

export default ValentineCard;
