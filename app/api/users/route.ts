import { userTable, db } from "@/app/lib/drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";
//import { sql, db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Method 1:- connect with database and then query
  //const client = await db.connect();
  //const users = await client.query(`SELECT * FROM users`);

  // Method 2:- connect direct with sql query
  //   const users = await sql`SELECT * FROM users`;
  const users = await db.select().from(userTable);

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  await db.insert(userTable).values(body);

  //console.log(body);

  return NextResponse.json("hello post request");
}

export async function PUT(request: Request) {
  const body = await request.json();
  await db.update(userTable).set(body).where(eq(userTable._id, body._id));

  revalidateTag("updateData");

  //console.log(body);

  return NextResponse.json("hello post request");
}
