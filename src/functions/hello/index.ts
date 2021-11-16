import type { AWS } from "@serverless/typescript";
type FunctionConfig = AWS["functions"][string];

import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";

const config: FunctionConfig = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "hello",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};

export default config;
