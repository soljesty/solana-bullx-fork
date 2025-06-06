"use client";

import { customFetch } from "../fetchConfig";

export async function endTradingRound(variables: {
  round_id: number;
}): Promise<{ message: string }> {
  try {
    const res = await customFetch("/admin/endTradingRound", {
      method: "post",
      body: JSON.stringify(variables),
    }).then((res) => res.json());

    if (!res) {
      throw new Error();
    }

    return res as {
      message: string;
    };
  } catch (err) {
    return Promise.reject(new Error("Failed at ending trading round"));
  }
}
