const CheckBox = ({ label }) => {
  return (
    <div className="form-control">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary checkbox-xs bg-white rounded-none"
        />
        <span className="label-text text-primary text-sm">{label}</span>
      </label>
    </div>
  );
};

export default CheckBox;