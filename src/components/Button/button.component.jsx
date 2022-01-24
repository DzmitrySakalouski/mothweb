export const Button = ({title, onPress}) => {
  return (
    <div className="btn" onClick={onPress}>
      {title}
    </div>
  );
};
