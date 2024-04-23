import { auth } from "@clerk/nextjs";

const adminIds = [
  "user_2eBRW9wvlo1PAXscvNYKtuUcEMi",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
