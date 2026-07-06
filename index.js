const UUID = "ec2061ab-12fd-4eab-9a58-485b7a9d4288";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("VLESS Worker is running");
    }

    if (url.pathname === `/${UUID}`) {
      return new Response("VLESS endpoint ready");
    }

    return new Response("Not Found", { status: 404 });
  },
};
