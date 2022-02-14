import { createMocks } from "node-mocks-http";

import helloAPI from "~/pages/api/hello";

test("HelloAPI return name with value John Doe", async () => {
  const { req, res } = createMocks({
    method: "GET",
  });

  await helloAPI(req, res);

  expect(res._getStatusCode()).toBe(200);
  const resp = res._getJSONData();

  expect(resp).toHaveProperty("name", "John Doe");
});
