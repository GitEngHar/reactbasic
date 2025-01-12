export const CompleteTodos = (props)=>{
    const {completeTodos,onClickComplete} = props;
    return (
        <div className="complete-area">
            <p className="title">完了のTODO</p>
            <ul>
                {completeTodos.map((completeTodo, index) => (
                    <li key={completeTodo}>
                        <div className="list-row">
                            <p className="todo-item">{completeTodo}</p>
                            <button onClick={() => onClickComplete(index)}>戻す</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}