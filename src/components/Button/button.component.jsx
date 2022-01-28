import classNames from 'classnames';

export const Button = ({title, onPress, className}) => {
  return (
    <div className={classNames('btn', className)} onClick={onPress}>
      {title}
    </div>
  );
};
