import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((_, req) => {
  const publicRoutes = ["/", "/login", "/signup"];

  const isPublic = publicRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isPublic) return;

  // check Clerk session via headers (works in middleware runtime)
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    const url = new URL("/login", req.url);
    return Response.redirect(url);
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};