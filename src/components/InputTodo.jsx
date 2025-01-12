// 実行を受ける子コンポーネント
export const InputTodo = (props)=>{
    const {inputTodo,onChange,onClick,disabled} = props;
    return (
        <>
            <div className="input-area">
                <input disabled={disabled} placeholder="TODOを入力" value={inputTodo} onChange={onChange}></input>
                <button disabled={disabled} onClick={onClick}>TODOを追加</button>
            </div>
        </>
    )
}