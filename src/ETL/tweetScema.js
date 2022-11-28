import Ajv from "ajv6";
const ajv = new Ajv();

const tweetSchema = {
  type: "object",
  properties: {
    created_at: { type: "string" },
  },
  required: ["foo"],
  additionalProperties: false,
};
