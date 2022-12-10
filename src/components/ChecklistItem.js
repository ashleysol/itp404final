export default function ChecklistItem(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={(event) => {
          props.onChange(event.target.checked);
        }}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}
