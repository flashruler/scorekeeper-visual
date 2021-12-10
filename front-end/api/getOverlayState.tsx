import React, { useState } from "react";
import useSWR from "swr";

export default function getOverlayState() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  let { data, error } = useSWR(`http://localhost:4000/states`, fetcher, { refreshInterval: 2000 });

  return {
    overlayData: data,
    overlayIsLoading: !error && !data,
    overlayIsError: error,
  };
}
