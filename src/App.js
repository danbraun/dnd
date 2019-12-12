import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DropContainer from "./DropContainer";

const getItems = count =>
  Array.from({ length: count }, (el, index) => index).map(index => ({
    id: `item-${index}`,
    content: `item-${index}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );
    this.setState({
      items
    });
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <DropContainer items={this.state.items} />
      </DragDropContext>
    );
  }
}

export default App;
