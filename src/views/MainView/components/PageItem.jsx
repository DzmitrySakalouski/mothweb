export const PageItem = ({id, styleClass}) => {
  return (
    <div href={`#${id}`} className={`page-item ${styleClass}`}>
      <div>{id}</div>
    </div>
  );
};
