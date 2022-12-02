import { CircularProgress } from "@mui/material";
import Container from "@mui/material/Container";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGists, STATUSES } from "../middlewares/APIThunk";
import {
  selectGists,
  selectGistsLoading,
  selectGistsStatus,
} from "../store/gists/selectors";

export const API_URL_PUBLIC = "https://api.github.com/gists/public";
export const API_URL_GIST = "https://api.github.com/gists/";

// export default function APIComponent(props) {
//   const [gists, setGists] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const requestGists = () => {
//     setError(false);
//     setLoading(true);
//     fetch(API_URL_PUBLIC)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Request failed with status ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(result => {
//         setGists(result);
//         // console.log(setGists(result));
//       })
//       .catch(err => {
//         setError(true);
//         // console.log(err);
//       })
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     requestGists();
//   }, []);

//   const renderGist = useCallback(
//     gist => <li key={gist.id}>{gist.description}</li>,
//     []
//   );

//   if (loading) {
//     return <CircularProgress />;
//   }

//   if (error) {
//     return (
//       <>
//         <h3>Error</h3>
//         <button onClick={requestGists}>Retry</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <Container maxWidth="xl">
//         <h1>Страница запроса</h1>
//       </Container>
//       <ul>{gists.map(renderGist)}</ul>;
//     </>
//   );
// }

export const APIComponent = () => {
  const dispatch = useDispatch();
  const gists = useSelector(selectGists);

  const loading = useSelector(selectGistsLoading);
  const status = useSelector(selectGistsStatus);
  const requestGists = useCallback(() => {
    dispatch(getAllGists());
  }, [getAllGists]);

  useEffect(() => {
    requestGists();
  }, [requestGists]);

  const renderGist = useCallback(
    gist => <li key={gist.id}>{gist.description}</li>,
    []
  );
  if (loading) {
    return <CircularProgress />;
  }
  if (status === STATUSES.FAILURE) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    );
  }
  return <ul>{gists.map(renderGist)}</ul>;
};
