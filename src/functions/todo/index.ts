import type { AWS } from "@serverless/typescript";
type FunctionConfig = AWS["functions"][string];
import { handlerPath } from "@libs/handlerResolver";

const path = "todos";
export const create: FunctionConfig = {
  handler: `${handlerPath(__dirname)}/create.create`,
  events: [
    {
      http: {
        path,
        method: "post",
        cors: true,
      },
    },
  ],
};
export const list: FunctionConfig = {
  handler: `${handlerPath(__dirname)}/list.list`,
  events: [
    {
      http: {
        path,
        method: "get",
        cors: true,
      },
    },
  ],
};
