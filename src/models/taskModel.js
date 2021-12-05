const url = `http://localhost:8000/api/v1`

class TaskModel {
    static all = () => {
        // the fetch API will not parse JSON in the response automatically so we handle it in the first .then()
        return fetch(`${url}/tasks`).then(res => res.json())
      }

      static show(id) {
        // the fetch API will not parse JSON in the response automatically so we handle it in the first .then()
        return fetch(`${url}/tasks/${id}`).then(res => res.json())
      }

      static create = (taskData) => {
        return fetch(`${url}/tasks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
        })
        .then(res => {
            body: JSON.stringify(taskData)
            res.json()
          })
      }
    
}


export default TaskModel
