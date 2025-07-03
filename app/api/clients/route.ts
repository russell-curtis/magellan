import { db } from "@/db/drizzle";
import { clients } from "@/db/schema";
import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET() {
  try {
    console.log('Fetching clients...');
    console.log('Database URL:', process.env.DATABASE_URL);
    const allClients = await db.select().from(clients);
    
    // Transform snake_case to camelCase
    const transformedClients = allClients.map(client => ({
      id: client.id,
      name: client.name,
      email: client.email,
      programId: client.programId,
      assignedTo: client.assignedTo,
      status: client.status,
      createdAt: client.createdAt
    }));

    console.log('Fetched clients:', transformedClients);
    return NextResponse.json(transformedClients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    return NextResponse.json(
      { error: "Failed to fetch clients" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  if (!body.name || !body.email || !body.programId) {
    return new NextResponse("Missing required fields", { status: 400 });
  }

  const newClient = await db.insert(clients).values({
    name: body.name,
    email: body.email,
    programId: body.programId,
    assignedTo: session.user.id,
  }).returning();

  return NextResponse.json(newClient[0]);
} 