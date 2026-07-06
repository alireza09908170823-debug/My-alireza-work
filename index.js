const UUID = "ec2061ab-12fd-4eab-9a58-485b7a9d4288";

export default {
  async fetch(request) {
    const upgradeHeader = request.headers.get("Upgrade");

    if (upgradeHeader !== "websocket") {
      return new Response("VLESS Worker Online", {
        status: 200,
      });
    }

    const [client, server] = Object.values(new WebSocketPair());

    server.accept();

    server.send(
      JSON.stringify({
        status: "connected",
        uuid: UUID,
      })
    );

    return new Response(null, {
      status: 101,
      webSocket: client,
    });
  },
};
