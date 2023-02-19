export const Header = ({ inputRef, setLocation }) => {
    return (
        <div className="search">
            <form onSubmit={(e) => {
                e.preventDefault()
                setLocation(inputRef.current.value)
            }}>
                <input
                    ref={inputRef}
                    placeholder='Enter Location'
                    type="text"
                />
                <button 
                    className="submitButton" 
                    type='submit' 
                    onClick={() => {
                    setLocation(inputRef.current.value)
                }}></button>
            </form>
        </div>
    )
}