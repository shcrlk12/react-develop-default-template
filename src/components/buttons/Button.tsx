type ButtonProps = {
  handleClick: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div
      onClick={props.handleClick}
      className="bg-sky-500 rounded-sm text-white w-4/5 p-1 text-center uppercase bold mt-7 mx-[10%] tracking-wide text-base hover:bg-sky-600 cursor-pointer"
    >
      <p>Log In</p>
    </div>
  );
};

export default Button;
