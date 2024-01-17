export default function Button({ label, handler, children, className="", archetype="default", ...props }) {
  var buttonClasses = "py-2 px-4 rounded-md ";

  archetype = archetype.toLowerCase();

  if (archetype == "default") {
    buttonClasses += "text-classygrey bg-maroon hover:bg-maroon-light ";
  } else if (archetype == "cancel") {
    buttonClasses += "text-maroon-dark bg-transparent hover:text-black hover:underline ";
  } else if (archetype == "save") {
    buttonClasses += "text-classygrey bg-maroon-dark hover:bg-maroon-light hover:text-parcheminwhite ";
  }

  return (
    <button 
      className={buttonClasses + className}
      type="button" 
      onClick={handler} 
      {...props}
    >
      {children}
    </button>
  );
}