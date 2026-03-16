function Switch({ enabled, setEnabled }) {
  return (
    <button
      type="button"
      className="w-8 h-5 p-1 bg-purple-600 rounded-full cursor-pointer flex items-center"
      onClick={() => setEnabled(prev => !prev)}
    >
      <div
        className={`bg-white w-3 h-3 rounded-full transform transition-transform duration-200 ${
          enabled ? "translate-x-3" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default Switch;