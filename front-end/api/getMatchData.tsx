import React, { useState } from "react";
import useSWR from "swr";

export default function getMatchData() {
  const requestOptions = { headers: { Authorization: "QumKuimwfDfmoELSHGDpVttheeLNKJLx" } };
  const fetcher = (url) => fetch(url).then((res) => res.json());
  let { data, error } = useSWR(`http://localhost/api/2022/v1/events/test/matches/01/`, fetcher, { refreshInterval: 5000 });

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
