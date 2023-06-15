/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Spinner from "../../components/Spiner";

const queryClient = new QueryClient();

export default function NewWayFetchData() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryWay />
      </QueryClientProvider>
    </div>
  );
}

function ReactQueryWay() {
  const { isLoading, error, data } = useQuery("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  if (isLoading) return <Spinner />;
  if (error) return <div>Error : {error.message}</div>;

  return (
    <div>
      <h1 className="text-4xl">Fetch Data Using React Query</h1>
      <br />
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function AxiosWay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Fetch Data Using Axios</h1>
      <br />
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

function OldWay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Data Users</h1>
      <br />
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
