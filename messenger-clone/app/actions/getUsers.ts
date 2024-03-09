import getSession from "./getSession";
import prisma from "@/app/lib/prisma";

const getUser = async () => {
  const session = await getSession();
  if (!session?.user?.email) {
    return [];
  }
  try {
  } catch (error: any) {
    return [];
  }
};
