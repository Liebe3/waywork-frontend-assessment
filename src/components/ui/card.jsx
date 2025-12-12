function Card({ className, ...props }) {
  const baseClasses =
    "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return <div data-slot="card" className={combinedClasses} {...props} />;
}

function CardHeader({ className, ...props }) {
  const baseClasses =
    "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return <div data-slot="card-header" className={combinedClasses} {...props} />;
}

function CardTitle({ className, ...props }) {
  const baseClasses = "leading-none font-semibold";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return <div data-slot="card-title" className={combinedClasses} {...props} />;
}

function CardDescription({ className, ...props }) {
  const baseClasses = "text-muted-foreground text-sm";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return (
    <div data-slot="card-description" className={combinedClasses} {...props} />
  );
}

function CardAction({ className, ...props }) {
  const baseClasses =
    "col-start-2 row-span-2 row-start-1 self-start justify-self-end";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return <div data-slot="card-action" className={combinedClasses} {...props} />;
}

function CardContent({ className, ...props }) {
  const baseClasses = "px-6";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return (
    <div data-slot="card-content" className={combinedClasses} {...props} />
  );
}

function CardFooter({ className, ...props }) {
  const baseClasses = "flex items-center px-6 [.border-t]:pt-6";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  return <div data-slot="card-footer" className={combinedClasses} {...props} />;
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
