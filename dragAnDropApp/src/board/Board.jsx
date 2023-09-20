import initialData from './data.js'
import {useState} from "react";
import {DragDropContext} from "react-beautiful-dnd";
import Column from "./Column.jsx";
import './board.css'

function Board () {
    const [starter, setStarter] = useState(initialData);

    const onDragEnd = ({ destination, source, draggableId, type }) => {
        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = starter.columns[source.droppableId];
        const end = starter.columns[destination.droppableId];

        if (start === end) {
            const column = starter.columns[source.droppableId];
            const taskIds = [...column.taskIds];
            taskIds.splice(source.index, 1);
            taskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...column,
                taskIds
            };
            setStarter({
                ...starter,
                columns: {
                    ...starter.columns,
                    [column.id]: newColumn
                }
            });
            return;
        }

        const startTaskIds = [...start.taskIds];
        const endTaskIds = [...end.taskIds];

        startTaskIds.splice(source.index, 1);
        endTaskIds.splice(destination.index, 0, draggableId);

        const newStartColumn = {
            ...start,
            taskIds: startTaskIds
        };
        const endTaskColumn = {
            ...end,
            taskIds: endTaskIds
        };

        setStarter({
            ...starter,
            columns: {
                ...starter.columns,
                [start.id]: newStartColumn,
                [end.id]: endTaskColumn
            }
        });
        console.log("new starter", starter);

        console.log(destination, source, draggableId);
    };

    return (
        <div className="board">
            <DragDropContext onDragEnd={onDragEnd}>
                {starter.columnOrder.map((columnId) => {
                    const column = starter.columns[columnId];
                    const tasks = column.taskIds.map(taskId => starter.tasks[taskId]);
                    return (
                        <Column
                            key={column.id}
                            column={column}
                            tasks={tasks}
                        />
                    );
                })}
            </DragDropContext>
        </div>
    )

}

export default Board;
