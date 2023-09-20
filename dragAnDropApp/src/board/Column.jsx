import {Droppable} from "react-beautiful-dnd";
import Task from "./Task.jsx";

// eslint-disable-next-line react/prop-types
function Column({ tasks, column }) {
    return (
        // eslint-disable-next-line react/prop-types
        <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
                <div className="column">
                    {/* eslint-disable-next-line react/prop-types */}
                    <h3 className="column-title">{ column.title }</h3>
                    <div ref={provided.innerRef}
                         className={`${snapshot.isDraggingOver ? 'dragging' : '' } column-list `}
                         {...provided.droppableProps}
                    >
                        {/* eslint-disable-next-line react/prop-types */}
                        {tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                    </div>
                </div>
            )}
        </Droppable>
    )
}

export default Column;
