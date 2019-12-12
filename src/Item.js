import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

class Item extends React.Component {
    render() {
        return (
            <Draggable index={this.props.index} draggableId={this.props.id}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                            backgroundColor: snapshot.isDragging ? 'seagreen' : 'beige',
                            padding: 16,
                            margin: "0 0 8px 0",
                            ...provided.draggableProps.style
                        }}
                    >
                        <span {...provided.dragHandleProps}>::::</span> {this.props.content}
                    </div>
                )}
            </Draggable>
        )
    }
}

export default Item;