import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef(function({label, type="text", ...props}, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return inputRef.current.value;
      }
    };
  });

  return (
    <div className="grid justify-items-left px-6 pb-4">
      <label className="uppercase w-full text-left font-bold text-sm pb-1 text-maroon-light">{label}</label>
      {type == "textarea" ? 
        <textarea ref={inputRef} className="bg-parcheminwhite border-parcheminwhite-dark border-b-2 rounded-sm" rows="3" {...props}></textarea>
        : <input ref={inputRef} type={type} className="bg-parcheminwhite border-parcheminwhite-dark border-b-2 rounded-sm" {...props} />}
    </div>
  );
});

export default Input;