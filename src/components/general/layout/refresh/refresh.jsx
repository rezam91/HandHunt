const RefreshButton = () => {
    const refreshWindow = () => {
        window.location.reload();
    }
    return <button onClick={refreshWindow} className="ref-button">Reset Game!</button>
}

export default RefreshButton