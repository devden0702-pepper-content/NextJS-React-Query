import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import Loader from "../components/Loader/Loader";
import List from "../components/List/List";
import useApi from "../hooks/api/useApi";

export default function NewPage() {
  const [pageNo, setPageNo] = useState(0);
  const [shouldMakeApiCall, setShouldMakeApiCall] = useState(true);
  const router = useRouter();
  const { data: apiResponse, isFetching } = useApi(
    "LIST",
    shouldMakeApiCall,
    pageNo,
    () => {
      console.log("Success");
      setShouldMakeApiCall(false);
    }
  );

  useEffect(() => {
    setShouldMakeApiCall(true);
  }, [pageNo]);

  return (
    <header>
      <h1>New Page</h1>
      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => setPageNo((prevVal) => prevVal + 1)}>
        Page Count +{" "}
      </button>
      {isFetching ? <Loader /> : <List listItemsArray={apiResponse} />}
    </header>
  );
}
