const RefreshButton = () => {
    const refreshWindow = () => {
        window.location.reload();
    }
    return <button onClick={refreshWindow} className="ref-button">Refresh Game!</button>
}

export default RefreshButton