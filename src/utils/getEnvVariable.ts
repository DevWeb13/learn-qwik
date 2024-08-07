// src/utils/getEnvVariable.ts

import { server$ } from "@builder.io/qwik-city";

export const getEnvVariable = server$(function (envVariableName: string) {
  const envValue = this.env.get(envVariableName);
  return envValue;
});
