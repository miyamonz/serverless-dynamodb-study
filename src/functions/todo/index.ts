import { handlerPath } from "@libs/handlerResolver";

const path = "todos";
export const create = {
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
export const list = {
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
