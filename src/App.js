import React, { Component } from "react";
import CardSlider from "./CardSlider";
import YouTubeMusic from "./BackgroundMusic";
// Si la pusiste en src/assets:
// import imgQ from "./assets/valentin-question.png";

class App extends Component {
	render() {
		const cards = [
			{
				eyebrow: "HOLA!!!",
				backgroundImageUrl: require('./images/imagen1.png'),
				icon: "💌",
				title: "¿Por qué se celebra San Valentín?",
				body: "Cuenta una antigua leyenda que, en el siglo III, el sacerdote romano San Valentín se opuso a la prohibición del emperador Claudio II, quien había decretado que los jóvenes solteros eran mejores militares si no entablaban vínculos amorosos con mujeres.",
				overlay: true,
				overlayOpacity: 0.45,
				align: "left",
				variant: "glass",
				size: "lg",
			},
			{
				eyebrow: "Luego",
				backgroundImageUrl: require('./images/imagen1.png'),
				icon: "💌",
				title: "",
				body: "Valentín, en desafío a esta orden, unía en secreto a las parejas bajo el rito católico, lo que le costó la vida por desobediencia. Eran épocas en que el Imperio Romano perseguía a los cristianos a quienes veía como desestabilizadores de su poder.",
				overlay: true,
				overlayOpacity: 0.45,
				align: "left",
				variant: "glass",
				size: "lg",
			},
			{
				eyebrow: "Y luego...",
				backgroundImageUrl: require('./images/imagen1.png'),
				icon: "📜",
				title: "¿Qué pasó después con el amigo Valentín?",
				body: "Con el tiempo, varias tradiciones se mezclaron y el día se volvió símbolo de cariño y amor. Y a Valentín lo recordamos con cariño.",
				overlay: true,
				overlayOpacity: 0.45,
				align: "left",
			},
			{
				eyebrow: "",
				backgroundImageUrl: require('./images/imagen1.png'),
				icon: "❤️",
				title: "¿Y por qué me constás esto?",
				body: "Te preguntarás para qué te cuento esto, y qué tiene que ver, pues no tiene demasiado que ver con nosotros. Yo no soy un soldado romano ni nada parecido pero...",
				overlay: true,
				overlayOpacity: 0.45,
				align: "left",
			},
			{
				eyebrow: "",
				backgroundImageUrl: require('./images/imagen2.png'),
				icon: "❤️",
				title: "Me encanta decirte...",
				body: "Me encanta decirte lo bella que sos, lo interesante y agradable que sos.\n\nTu estilo me resulta tan seductor.",
				overlay: true,
				overlayOpacity: 0.45,
				align: "left",
			},
			{
				eyebrow: "",
				backgroundImageUrl: require('./images/imagen2.png'),
				icon: "❤️",
				title: "Te admiro...",
				body: "Admiro tanto como te expresas, la pasión que veo en tus ojos cuando me hablás de física de células jajaja...\n\nLas palabras que empleas al hablar y que me escuches tan atentamente...",
				overlay: true,
				overlayOpacity: 0.45,
				align: "left",
			},
			{
				eyebrow: "",
				backgroundImageUrl: require('./images/imagen2.png'),
				icon: "❤️",
				title: "Así que nada...",
				body: "Feliz día cualquiera, al que algunos llaman San Valentín, aunque sea un día cualquiera, ojalá pase muchos días cualquiera con vos.",
				overlay: true,
				overlayOpacity: 0.45,
				align: "left",
			},
		];

		return (
			<div>
				<YouTubeMusic videoId="oy5ouz2x3TA" />
				<CardSlider cards={cards} />
			</div>
		);
	}
}

export default App;