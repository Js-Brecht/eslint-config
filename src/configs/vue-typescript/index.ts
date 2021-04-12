import { merge } from "~/utils";
import standard from "@/standard";
import { overrides } from "./overrides";

export = Object.freeze(merge(standard, { overrides }));