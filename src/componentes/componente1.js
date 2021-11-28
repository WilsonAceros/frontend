import react from 'react';
import Componente3 from './componente3';

class Componente1 extends react.Component {
    render() {
        return (
            <div className="App">
                <div className="comp1"><h1>Componentes Hijo N1</h1></div>
                <div className="comp3"><Componente3 /></div>
            </div>
        );
    }
}

export default Componente1;