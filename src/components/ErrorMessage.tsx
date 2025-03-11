type ErrorMessageProps = {
  msg: string;
  show: boolean;
};

const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <div className={props.show ? "errorMsg" : "hideErrorMsg"}>
      <h3 className="text-white ml-[10%] w-[80%] h-8 uppercase pl-2 flex items-center bg-red-500 text-sm tracking-wider rounded-md">
        {props.msg}
      </h3>
    </div>
  );
};

export default ErrorMessage;
