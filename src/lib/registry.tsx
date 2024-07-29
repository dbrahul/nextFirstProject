"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// StyledComponentsRegistry component to manage styled-components on the server and client
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a new instance of ServerStyleSheet only once using lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  // Inject the server-rendered styles into the HTML
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // If running in the browser, directly return the children without StyleSheetManager
  if (typeof window !== "undefined") return <>{children}</>;

  // If running on the server, wrap the children with StyleSheetManager
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
