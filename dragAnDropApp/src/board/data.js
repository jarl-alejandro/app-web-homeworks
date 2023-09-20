export default {
    tasks: {
        "task-1": { id: "task-1", content: "Fundamentos de Programación" },
        "task-2": { id: "task-2", content: "Estructuras de Datos y Algoritmos" },
        "task-3": { id: "task-3", content: "Desarrollo Web" },
        "task-4": { id: "task-4", content: "Desarrollo de Back-End" },
        "task-5": { id: "task-5", content: "Gestión de Versiones" },
        "task-6": { id: "task-6", content: "Pruebas y Depuración" },
        "task-7": { id: "task-7", content: "Diseño de Software" },
        "task-8": { id: "task-8", content: "Bases de Datos" },
        "task-9": { id: "task-9", content: "Seguridad" },
        "task-10": { id: "task-10", content: "Despliegue y DevOps" },
        "task-11": { id: "task-11", content: "Gestión de Proyectos" },
        "task-12": { id: "task-12", content: "Aprendizaje Continuo" },
        "task-13": { id: "task-13", content: "Mentoría y Redes" },
        "task-14": { id: "task-14", content: "Proyectos Personales" },
        "task-15": { id: "task-15", content: "Trabajo en Equipo" },
        "task-16": { id: "task-16", content: "Certificaciones y Educación Formal" }
    },
    columns: {
        "todo": {
            id: "todo",
            title: "Por hacer",
            taskIds: ["task-1",
                "task-2",
                "task-3",
                "task-4",
                "task-5",
                "task-6",
                "task-7",
                "task-8",
                "task-9",
                "task-10",
                "task-11",
                "task-12",
                "task-13",
                "task-14"]
        },
        "in-progreess": {
            id: "in-progreess",
            title: "En progreso",
            taskIds: [
                "task-15",
                "task-16"
            ]
        },
        "done": {
          id: "done",
          title: "Finalizado",
          taskIds: []
        }
    },
    columnOrder: ["todo", "in-progreess", "done"]
};
