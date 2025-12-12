import * as LabelPrimitive from "@radix-ui/react-label";

function Label({ className, ...props }) {
  const baseClasses =
    "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={combinedClasses}
      {...props}
    />
  );
}

export { Label };
