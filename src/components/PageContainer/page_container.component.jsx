export const PageContainer = ({children, onScroll}) => {
  return (
    <div onScroll={onScroll} className="page-container">
      {children}
    </div>
  );
};
