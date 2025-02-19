import { client } from "@/sanity/lib/client";
import { Waitlist } from "@/types/generated-types";

export async function fetchDocument<T>({
  query,
}: {
  query: string;
}): Promise<T | null> {
  try {
    const res: T = await client.fetch(query, {}, { cache: "no-cache" });

    if (res) {
      return res;
    }
    throw new Error("Failed to fetch item");
  } catch {
    return null;
  }
}

export async function fetchDocuments<T>(query: string): Promise<T[]> {
  try {
    const res: T[] = await client.fetch(query, {}, { cache: "no-cache" });

    if (res) {
      return res;
    }
    throw new Error("Failed to fetch testimonials");
  } catch {
    return [];
  }
}

export async function fetchDocumentBySlug<T>({
  query,
  slug,
}: {
  query: string;
  slug: string;
}): Promise<T | null> {
  try {
    const res: T = await client.fetch(query, { slug }, { cache: "no-cache" });

    if (res) {
      return res;
    }
    throw new Error("Failed to fetch item");
  } catch {
    return null;
  }
}

export async function fetchDocumentByRef<T>({
  query,
  ref,
}: {
  query: string;
  ref: string;
}): Promise<T | null> {
  try {
    const res: T = await client.fetch(query, { ref }, { cache: "no-cache" });

    if (res) {
      return res;
    }
    throw new Error("Failed to fetch item");
  } catch {
    return null;
  }
}

export async function fetchDocumentsByProperty<T>({
  query,
  property,
}: {
  query: string;
  property: string;
}): Promise<T[]> {
  try {
    const res: T[] = await client.fetch(
      query,
      { property },
      { cache: "no-cache" },
    );

    if (res) {
      return res;
    }
    throw new Error("Failed to fetch item");
  } catch {
    return [];
  }
}

export async function fetchCacheDocuments<T>(query: string): Promise<T[]> {
  try {
    const res: T[] = await client.fetch(query, {});

    if (res) {
      return res;
    }
    throw new Error("Failed to fetch testimonials");
  } catch {
    return [];
  }
}

export async function fetchCacheDocumentBySlug<T>({
  query,
  slug,
}: {
  query: string;
  slug: string;
}): Promise<T | null> {
  try {
    const res: T = await client.fetch(query, { slug });

    if (res) {
      return res;
    }
    throw new Error("Failed to fetch item");
  } catch {
    return null;
  }
}

export async function fetchCacheDocumentByRef<T>({
  query,
  ref,
}: {
  query: string;
  ref: string;
}): Promise<T | null> {
  try {
    const res: T = await client.fetch(query, { ref });

    if (res) {
      return res;
    }
    throw new Error("Failed to fetch item");
  } catch {
    return null;
  }
}

export async function fetchDocumentsBySlug<T>({
  query,
  slug,
}: {
  query: string;
  slug: string;
}): Promise<T[]> {
  try {
    const res: T[] = await client.fetch(query, { slug });

    if (res) {
      return res;
    }
    throw new Error("Failed to fetch item");
  } catch {
    return [];
  }
}

export async function addToWaitlist(email: string) {
  try {
    const waitlist = await client.fetch<Waitlist[]>(
      `*[_type == "waitlist" && email == $email]`,
      { email },
    );

    if (waitlist.length > 0) {
      return;
    }

    const res = client.create({
      _type: "waitlist",
      email,
    });

    return res;
  } catch (error) {
    return error;
  }
}
