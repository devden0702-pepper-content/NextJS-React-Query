import Link from "next/link";
import { useEffect, useState } from "react";
import List from "../components/List/List";
import Loader from "../components/Loader/Loader";
import useApi from "../hooks/api/useApi";

export default function Home() {
  const [pageNo, setPageNo] = useState(0);
  const [apiCalled, setApiCalled] = useState(false);
  const { isFetching, data: apiResponse } = useApi(
    "LIST",
    apiCalled,
    pageNo,
    () => {
      setApiCalled(false);
    }
  );

  const handleApiCall = async () => {
    try {
      setApiCalled(true);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {}, 20002);
  // });

  return (
    <header>
      <h1>Welcome to react query demo</h1>
      <button onClick={handleApiCall}>Click to make an API request</button>
      <div>
        <Link href={"/newpage"}>New Page</Link>
      </div>
      <div>
        <Link href={"/noapipage"}>No API page</Link>
      </div>
      <div>
        <button onClick={() => setPageNo((prevVal) => prevVal + 1)}>
          Page Count +{" "}
        </button>
      </div>
      {isFetching ? <Loader /> : <List listItemsArray={apiResponse} />}
    </header>
  );
}
