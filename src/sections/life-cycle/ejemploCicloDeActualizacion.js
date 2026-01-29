import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  panda: 'https://img.freepik.com/foto-gratis/vista-animal-dibujos-animados-practicando-yoga_23-2151532840.jpg?semt=ais_hybrid&w=740&q=80',
  cat: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRYErci0TnKuNyLYQgpbHMRb9rxe0sXsuqA&s',
  dolphin: 'https://thumbs.dreamstime.com/b/dolphin-calf-swims-gracefully-underwater-alongside-its-caring-mother-cartoon-anime-style-playful-explores-enchanting-352602694.jpg'
}
const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends PureComponent {
  state = { src: ANIMAL_IMAGES[this.props.animal] }

  componentWillReceiveProps (nextProps) {
    console.clear()
    console.log('1. componentWillReceiveProps', nextProps)
    this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
  }

//   shouldComponentUpdate (nextProps) {
//     console.log('2. shouldComponentUpdate', nextProps)
//     return this.props.animal !== nextProps.animal
//   }

  UNSAFE_componentWillUpdate (nextProps, nextState) {
    console.log('3. componentWillUpdate', nextProps, nextState)
    const img = document.querySelector('img')
    console.log('from img element', { alt: img.alt })
    // web animations api
    img.animate([ {
      filter: 'blur(0px)'
    }, {
      filter: 'blur(2px)'
    }], {
      duration: 500,
      easing: 'ease'
    })
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('4. componentDidUpdate')
    const img = document.querySelector('img')
    img.animate([
      {
        filter: 'blur(2px)'
      },
      {
        filter: 'blur(0px)'
      }
    ], {
      duration: 1500,
      easing: 'ease'
    })
    console.log('from img element', { alt: img.alt })
  }

  render () {
    console.log('-> render')
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img
          alt={this.props.animal}
          src={this.state.src}
          width='250'
        />
      </div>
    )
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIMALS)
}

class EjemploDeCicloDeActualizacion extends Component {
  state = { animal: 'panda' }

  _renderAnimalButton = (animal) => {
    return (
      <button
        // disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.setState({ animal })}>
        {animal}
      </button>
    )
  }

  render () {
    return (
      <div>
        <h4>Ciclo de Actualización, Ejemplo de: ComponentDidUpdate</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </div>
    )
  }
}

export default EjemploDeCicloDeActualizacion