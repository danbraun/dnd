import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

const getItems = count => (Array.from({length: count}, (el, index) => index).map( index => ({
    'id': `item-${index}`,
    'content': `item-${index}`
})));
    

class App extends React.Component {

    
    constructor(props) {
        super(props);
        console.log(getItems(10));
    }

    render() {
        return (

            <div>
                App
            </div>
        )
    }
}

export default App;