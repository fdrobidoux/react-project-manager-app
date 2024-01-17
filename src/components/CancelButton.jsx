export default function CancelButton({label, ...props}) {
  return (
    <button type="button" {...props}>{label}</button>
  );
}