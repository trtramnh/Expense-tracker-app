import { db } from "../../../utils/dbConfig";
import { Budgets } from "../../../utils/schema";
import { eq } from "drizzle-orm";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const user = await currentUser();

    if (!user) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const result = await db
      .select()
      .from(Budgets)
      .where(
        eq(
          Budgets.createdBy,
          user?.primaryEmailAddress?.emailAddress
        )
      );

    return Response.json(result);
  } catch (error) {
    console.log(error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}