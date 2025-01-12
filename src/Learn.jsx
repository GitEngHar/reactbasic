// Componentは大文字はじまりがルール パスカルケース
// 関数化した内容を Htmlタグのようにして記述するのがJSX記法
// export で他のファイルから参照できるようにする
import Colorfulmessage from "./components/Colorfulmessage";
import { useEffect,useState } from "react";

export const Learn = () => {
    // 開発時に 特定の条件のみ2回初期レンダリング
    // StrictModeを使っていて開発環境のみ2回レンダリング走る
    const [num,setNum] = useState(0); // 配列を返す(ステート,ステートの更新関数) , 関数の一番上でしか呼べない
    const [isShowStr,setIsShowStr] = useState(false);
    const onClickCountUp = () => {

        setNum( (prev) => prev + 1 ) //引数に現在の値が入ってくる
        //setNum( (prev) => prev + 1 ) //引数に現在の値が入ってくる

        //setNum(num + 1); // Reactの仕組み上1度の関数でまとめて実施されるため、num0になってる
        //setNum(num + 1); // 更新を検知して上からレンダリングされる
    };
    // fontent-size ではなく fontSize で キャメルケースになる
    // inlineスタイルと呼ぶ (あまり本番の開発では使わない)


    const contentStyleB = {
        color: "red",
        fontSize : "18px",
        margin : 10
    };

    const onClickToggle = () => {
        setIsShowStr(!isShowStr)
    };

    // 第一引数に動作する関数,
    // 第二引数 空の場合は画面初期レンダリング時にだけ実行される
    useEffect(() => {
        //依存配列をnumとしたため numが変更されないと実行されなくなった
        if (num % 3 === 0){ //評価とレンダリングの連続でエラーになる
            isShowStr || setIsShowStr(true);
        }else{
            isShowStr && setIsShowStr(false);
        }
    },[num])

    return (
        // JSX記法のルールで囲う必要ある
        //<div>
        // JSX記法のルールを回避できる
        //<React.Fragment>
        // {}でjsと認識される
        // objectでcssを表記できる
        // props.childrenで <>aaa<>の文字列を取得できる
        <>
            <h1>こんにちは</h1>
            <Colorfulmessage color="black">元気??</Colorfulmessage>
            <Colorfulmessage color="blue">元気です</Colorfulmessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowStr && <p>HAHAHAHAHAHA</p>}
        </>
        //</React.Fragment>
        //</div>
    )
}