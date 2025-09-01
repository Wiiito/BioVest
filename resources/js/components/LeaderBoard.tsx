export default function LeaderBoard({ setState, leaders }) {
    return (
        <div className="modal-overlay">
            <button className="close-btn" onClick={() => setState(false)}>
                &times;
            </button>
            <div className="modal">
                <h2>🏆 Leaderboard</h2>
                <div className="leaderboard">
                    {leaders.map((leader, index) => (
                        <div>
                            <div className={'leaderboard-item top' + (index + 1)}>
                                <span className="player-name">{leader.name}</span>
                                <span className="player-score">{leader.points}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
