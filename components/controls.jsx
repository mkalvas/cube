import { useState } from 'react';

const Controls = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="control-card">
      <div className="controls">
        <h2 className="control-header">Controls</h2>
        {open && (
          <div className="control-rows">
            <div className="control">
              <strong>Right-click + drag:</strong> Rotate camera
            </div>
            <div className="control">
              <strong>Left-click:</strong> Select voxel
            </div>
          </div>
        )}
      </div>
      <button
        type="button"
        className="toggle-button"
        onClick={() => setOpen(!open)}
      >
        {open ? '-' : '+'}
      </button>
      <style jsx>{`
        .control-card {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 3px;
          display: flex;
          justify-content: space-between;
          left: 1.5rem;
          padding: 0.5em;
          position: absolute;
          top: 1.5rem;
          width: 300px;
          z-index: 1;
        }

        .control-header {
          margin: 0;
        }

        .toggle-button {
          align-self: flex-start;
          border: none;
          cursor: pointer;
          font-size: 1.5em;
          font-weight: 300;
          margin-left: -1.5rem;
          padding: 0.25;
          font-family: monospace;
        }

        .controls {
          display: flex;
          flex-direction: column;
        }

        .control-rows {
          margin-top: 0.75em;
        }

        .control {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 0.5em;
          width: 300px;
        }
      `}</style>
    </div>
  );
};

export default Controls;
