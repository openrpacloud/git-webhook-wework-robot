import * as Router from "koa-router";
import controller = require("./controller");

const router = new Router();

// GENERAL ROUTES
router.get("/", controller.general.helloWorld);
// router.get("/jwt", controller.general.getJwtPayload);
// 用于避开企业微信机器人不支持CORS的问题
router.post("/sendText", controller.general.sendText);

// router.post("/git", controller.gitlab.getWebhook);
// router.post("/gitlab", controller.gitlab.getWebhook);

router.post("/github", controller.github.getWebhook);

// USER ROUTES
// router.get('/users', controller.user.getUsers);
// router.get('/users/:id', controller.user.getUser);
// router.post('/users', controller.user.createUser);
// router.put('/users/:id', controller.user.updateUser);
// router.delete('/users/:id', controller.user.deleteUser);

export { router };
