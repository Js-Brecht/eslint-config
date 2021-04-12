import { merge } from "~/utils";
import standard from "@/standard/config.json";
import { overrides } from "./overrides";

export = Object.freeze(merge(standard, { overrides }));