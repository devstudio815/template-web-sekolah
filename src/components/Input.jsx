export function Input({ label, error, className = "", ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-foreground">{label}</label>
      )}
      <input
        className={`
          flex h-10 w-full rounded-md border border-input 
          bg-background px-3 py-2 text-sm 
          ring-offset-background 
          file:border-0 file:bg-transparent file:text-sm file:font-medium
          placeholder:text-muted-foreground
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
          disabled:cursor-not-allowed disabled:opacity-50
          ${error ? "border-error" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}
