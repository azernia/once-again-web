// 引入 mockjs 模块
import Mock from "mockjs";
// 引入 json 数据
import banners from "./banners.json";
import floors from "./floors.json";

Mock.mock('/mock/banner', {code: 200, data: banners});
Mock.mock('/mock/floor', {code: 200, data: floors});