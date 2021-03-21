import InputWrapper from "./InputStyles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  preffix?: JSX.Element;
}

export const Input = (props: IProps) => {
  const propsWithoutClassName = { ...props, className: '' }

  return (
    <InputWrapper className={props.className}>
      {props.preffix && <div className="preffix-wrapper">{props.preffix}</div>}
      <input {...propsWithoutClassName} />
    </InputWrapper>
  );
};
