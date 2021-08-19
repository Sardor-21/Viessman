const Title = ({ children }) => {
    return (
        <div className={"text-center"}>
            <h2 className={"fw-bold"}>
                {children}
            </h2>
            <hr style={{
                maxWidth: "520px",
                height: "1px",
                margin: "0 auto",
                marginTop: "20px",
                backgroundColor: "rgb(0, 5, 43)",
                opacity: "0.5"
            }} />
        </div>
    )
}

export default Title;