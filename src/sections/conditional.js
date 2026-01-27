import React, { Component } from 'react';

class LogginButton extends Component {
    render() {
        return <button>Login</button>;
    }
}

class LogoutButton extends Component {
    render() {
        return (
            <div>
                <p>Bienvenido</p>
                <button>Logout</button>
            </div>
        );
    }
}

// function conditionalRendering(mostrarA) {
//     if (mostrarA) {
//         return <ComponenteA />;
//     }
//     return <ComponenteB />;
// }

export default class ConditionalSection extends Component {
    constructor() {
        super();
        this.state = {
            mostrarA: true,
            isUserLogged: true
        };
    }

    render() {
        // const conditionalComponent = this.state.mostrarA ? 
        // <ComponenteA /> : 
        // <ComponenteB />;
        
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {
                    !this.state.isUserLogged ? 
                    <LogginButton /> : 
                    <LogoutButton />
                }
            </div>
        );
    }
}