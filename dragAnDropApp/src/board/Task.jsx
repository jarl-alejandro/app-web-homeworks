import {Draggable} from "react-beautiful-dnd";

// eslint-disable-next-line react/prop-types
function Task({ task, index }) {
    return (
        // eslint-disable-next-line react/prop-types
        <Draggable draggableId={task.id} type="task" index={index} >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    className={`${snapshot.isDraggingOver ? 'dragging' : '' } task `}
                >
                    {/* eslint-disable-next-line react/prop-types */}
                    <p>{task.content}</p>
                </div>
            )}
        </Draggable>
    )
}

export default Task
