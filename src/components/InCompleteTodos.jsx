export const InCompleteTodos = (props) => {
    const {incompleteTodos , onClickInComplete , onClickDelete} = props;
    return (
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>
            <ul>
                {incompleteTodos.map((todo, index) =>
                    (
                        //本来は一意のkeyを設定する
                        //allow関数の特性で returnなし()で複数行返却のみ
                        <li key={todo}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button onClick={() => onClickInComplete(index)}>完了</button>
                                {/*関数生成しないとレンダリング時に実行される*/}
                                <button onClick={() => onClickDelete(index)}>削除</button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}