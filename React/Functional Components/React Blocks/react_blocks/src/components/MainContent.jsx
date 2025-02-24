import Subcontent from "./Subcontent";
import Advertisement from "./Advertisement";

function MainContent() {
  return (
    <main className="main-content">
      <div className="subcontent-container">
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisement />
    </main>
  );
}

export default MainContent;
