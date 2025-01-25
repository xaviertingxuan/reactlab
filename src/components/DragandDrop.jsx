//app.jsx dragoover To add drag-over visual feedback, you can add this to the DropZone component:
const [isDragOver, setIsDragOver] = useState(false);

const handleDragEnter = (e) => {
  e.preventDefault();
  setIsDragOver(true);
};

const handleDragLeave = (e) => {
  e.preventDefault();
  setIsDragOver(false);
};

// Add to your div props:
// className={`drop-zone ${isDragOver ? 'drag-over' : ''}`}
// onDragEnter={handleDragEnter}
// onDragLeave={handleDragLeave}


// Drag and drop

// Draggable element
const DraggableItem = ({ id, data }) => {
    const handleDragStart = (e) => {
      e.dataTransfer.setData('text/plain', JSON.stringify(data));
      e.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        draggable={true}
        onDragStart={handleDragStart}
        className="draggable-item"
      >
        {/* Your content here */}
      </div>
    );
  };
  
  // Drop zone
  const DropZone = () => {
    const handleDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData('text/plain'));
      // Handle the dropped data here
    };
  
    return (
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="drop-zone"
      >
        {/* Your drop zone content */}
      </div>
    );
  };