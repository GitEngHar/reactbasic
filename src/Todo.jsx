import {useState} from "react";
import {InputTodo} from "./components/InputTodo";
import {InCompleteTodos} from "./components/InCompleteTodos";
import {CompleteTodos} from "./components/CompleteTodos";

export const Todo = () => {
    const [incompleteTodos  ,setIncompleteTodos] = useState(["TODO-1","TODO-2"])
    const [completeTodos,setCompleteTodos] = useState(["TODO-1","TODO-2"]);
    const [inputTodo,setInputTodo] = useState("");

    // イベント発火するとeventが渡ってくる
    // React Hook Form ライブラリを使って簡略してかける
    const onChangeTodoText = (event) => setInputTodo(event.target.value);
    const onClickAdd = () => {
        if (inputTodo === "") return;
        const newTodos = [...incompleteTodos,inputTodo];
        setIncompleteTodos(newTodos);
        setInputTodo("");
    }

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        //set系を渡す場合は常に新しい配列を生成して渡す。再レンダリングされん。
        newTodos.splice(index,1); //特定indexから1つ削除
        setIncompleteTodos(newTodos);
    }

    const onClickComplete = (index) => {
        // 対象のtodoを削除する
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index,1);

        // 対象todoを取得してnewに戻す
        const newInCompleteTodos = [...incompleteTodos,completeTodos[index]];
        setIncompleteTodos(newInCompleteTodos);
        setCompleteTodos(newCompleteTodos);

        /**
         * js や jqueryは idを取得しidに対して処理を記述していく 手続型。主語述語のような。
         * 要素を宣言して宣言した内容のデータを変更して生成していく。宣言型。
         * 手続型 => 要素はcreateelementされるので 膨大なjsを追う必要がある
         * 宣言型 => 既にhtmlは記述されておりdataが変わるだけなのでぱっと見でわかる
         * */
    }

    // 完了を押したボタンを未完了から完了に移す
    const onClickInComplete = (index) => {
        // 未完了のTODOをコピーして対象TODOを削除
        const newInCompleteTodos = [...incompleteTodos];
        newInCompleteTodos.splice(index,1);
        setIncompleteTodos(newInCompleteTodos);

        // 完了のTODOをコピーして対象TODOを追加
        const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
        setCompleteTodos(newCompleteTodos);

    }

    const isMaxTodoNums = incompleteTodos.length >= 5;

    return(
        <>
            <InputTodo
                inputTodo={inputTodo}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
                disabled={isMaxTodoNums}
            />
            {
                isMaxTodoNums && (
                    <p style={{color:"red"}}>入力できるのは5個まで</p>
                )
            }
            <InCompleteTodos
                incompleteTodos={incompleteTodos}
                onClickInComplete={onClickInComplete}
                onClickDelete={onClickDelete}
            />
            <CompleteTodos
                completeTodos={completeTodos}
                onClickComplete={onClickComplete}
            />
        </>
    )
}

