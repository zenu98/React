interface TodoListProps {
  items: { id: string; text: string }[];
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={props.onDelete.bind(null, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
