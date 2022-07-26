import "../styles.css";

export default function Slide(props) {
  const view = props.on;
  const styles = {
    display: view ? "none" : "block"
  };

  return (
    <div className="slide" style={styles}>
      <p>Animation</p>
    </div>
  );
}
