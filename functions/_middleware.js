export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Keep the legacy Pages address working, but send visitors to the new domain.
  if (url.hostname === "gamingcafe.pages.dev") {
    url.hostname = "iplayroom.fun";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
