// 分割代入
// proprsの値が変更された場合に再レンダリングされる
export const Colorfulmessage = ( { color , children } ) => {
    // 省略記法
    const contentStyleA = {
        color,
        fontSize : "18px",
    };
    return (
        <>
            <p style={contentStyleA}>{children}</p>
        </>

    )
}

export default Colorfulmessage;