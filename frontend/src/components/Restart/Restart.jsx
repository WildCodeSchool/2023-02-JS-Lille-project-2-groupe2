function Restart() {
  const restart = () => {
    window.location.reload();
  };

  return (
    <div className="restart_container">
      {" "}
      <button type="submit" id="restart" onClick={restart}>
        Restart
      </button>
    </div>
  );
}
export default Restart;
