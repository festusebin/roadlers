export const TabSelector = ({ isActive, children, onClick }) => (
    <div
      className={isActive ? 'active' : 'not-active'}
      onClick={onClick}
    >
      {children}
    </div>
  );