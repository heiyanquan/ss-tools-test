import pkg1 from "@heiyanquan/monorepo1";

function fun2() {
  pkg1();
  console.log("我是playground");
}

fun2();

export function handleDate() {
  console.log("handleDate");
}

export default fun2;
