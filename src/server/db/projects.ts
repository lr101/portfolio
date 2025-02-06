import { db } from "./index";
import { projects } from "./schema";
import { desc } from 'drizzle-orm';

export async function getProjects() {
  return db.select().from(projects).orderBy(desc(projects.createdAt));
} 