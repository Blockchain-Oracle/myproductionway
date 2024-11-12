import { GitHub } from "arctic";

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error(
    "GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be defined in the environment variables.",
  );
}
export const github = new GitHub(clientId, clientSecret);
