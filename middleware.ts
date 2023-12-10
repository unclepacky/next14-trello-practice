import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/", "/about", "/contact-us", "/gallery"],
  afterAuth(auth, req) {
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";
      console.log("user and public:(path) ", req.url);
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
        console.log(
          "user and public and Org :(path) ",
          req.url,
          " Path : ",
          path
        );
      }

      const orgSelection = new URL(path, req.url);
      console.log(
        "path: ",
        path,
        " req.url: ",
        req.url,
        "OrgSelection: ",
        orgSelection
      );

      return NextResponse.redirect(orgSelection);
    }
    if (!auth.userId && !auth.isPublicRoute) {
      console.log("Not user and Not public: ", req.url);

      return redirectToSignIn({ returnBackUrl: req.url });
    }
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      console.log("user and Not Org and not select: ", req.url);

      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
