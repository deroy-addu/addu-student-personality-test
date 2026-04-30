import React from "react";

export default function CapWidth({ children }: React.PropsWithChildren) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1500)_auto]">
      <div />
      <div>{children}</div>
      <div />
    </div>
  );
}
