import { server$ } from "@builder.io/qwik-city";

export const getEnvVariable = server$(function (envVariableName: string) {
  const envValue = this.env.get(envVariableName);
  console.log(`Env variable ${envVariableName}:`, envValue);
  return envValue;
});
