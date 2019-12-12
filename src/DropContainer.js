import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item'

const getItemDraggables = items => (
    items.map((item,index) => (
        <Item 
            id={item.id} 
            key={item.id} 
            content={item.content} 
            index={index}
        />
        )
    )
)

class DropContainer extends React.Component {

    render() {
        return (
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{
                            width:250,
                            backgroundColor: "gray",
                            padding: 8
                        }}
                    >
                       
                        {getItemDraggables(this.props.items)}
                        {provided.placeholder}
                    </div>
                )}
                
            </Droppable>
        )
    }
}

export default DropContainer;