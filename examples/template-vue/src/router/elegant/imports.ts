/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { RouteComponent } from "vue-router";
import type { LastLevelRouteKey, RouteLayout } from "@elegant-router/types";

import BaseLayout from "@/layouts/base-layout/index.vue";
import BlankLayout from "@/layouts/blank-layout/index.vue";

export const layouts: Record<RouteLayout, RouteComponent | (() => Promise<RouteComponent>)> = {
  base: BaseLayout,
  blank: BlankLayout,
};

export const views: Record<LastLevelRouteKey, RouteComponent | (() => Promise<RouteComponent>)> = {
  403: () => import("@/views/_error/403/index.vue"),
  404: () => import("@/views/_error/404/index.vue"),
  500: () => import("@/views/_error/500/index.vue"),
  about: () => import("@/views/about/index.vue"),
  list_detail: () => import("@/views/list/detail/index.vue"),
  list_home: () => import("@/views/list/home/index.vue"),
  "multi-menu_first_child": () => import("@/views/multi-menu/first_child/index.vue"),
  "multi-menu_second_child_home": () => import("@/views/multi-menu/second_child_home/index.vue"),
  user: () => import("@/views/user/[id].vue"),
};
