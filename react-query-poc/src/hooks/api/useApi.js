import { useQuery } from "react-query";

import axios from "axios";

async function queryFn(pageNo) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users?page=${pageNo}`
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export default function useApi(queryKey, enabled, pageNo, handleSuccess) {
  return useQuery(queryKey, () => queryFn(pageNo), {
    enabled,
    refetchOnWindowFocus: false,
    onSuccess: () => handleSuccess(),
  });
}

// https://reqres.in/api/users?page=2
