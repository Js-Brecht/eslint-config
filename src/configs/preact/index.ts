import { merge } from "~/utils";
import { overrides } from "./overrides";
import standard from "@/standard";

export = Object.freeze(merge(standard, { overrides }));