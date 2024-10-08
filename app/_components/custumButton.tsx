import { ReactNode } from "react";

const CustumButton = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return <button className={className}>{children}</button>;
};
export default CustumButton;
