"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  console.error("Global error caught:", error);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}