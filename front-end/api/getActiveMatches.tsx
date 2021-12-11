import React, { useState } from "react";
import useSWR from "swr";

export default function getActiveMatches() {
  const requestOptions = { headers: { Authorization: "QumKuimwfDfmoELSHGDpVttheeLNKJLx" } };
  const fetcher = (url) => fetch(url).then((res) => res.json());
  let { data, error } = useSWR(`http://localhost/api/v1/events/test/matches/active/`, fetcher, { refreshInterval: 6000 });

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
