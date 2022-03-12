import axios from 'axios';

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios(url).then((response) => {
  const data = response.data as TODO;

  const id = data.id;
  const title = data.title;
  const completed = data.completed;

  logoTodo(id, title, completed);
});

const logoTodo = (id: number, title: string, completed: boolean) => {
  console.log(`The todo id is ${id}
               title of todo is ${title}
               is todo completed ${completed} `);
};
