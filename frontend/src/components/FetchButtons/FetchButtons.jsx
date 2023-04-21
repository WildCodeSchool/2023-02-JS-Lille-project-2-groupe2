import { useState, useEffect } from "react";
import axios from "axios";
// import "/components/InputUsername/InputUsername.scss";
import _ from "lodash";

function FetchButtons() {
  const characters = "100";

  // List of APIs to fetch data from
  const ApiList = [
    {
      name: "Disney",
      url: `https://api.disneyapi.dev/characters?pageSize=${characters}`,
      path_to_data: "data.data",
      path_to_image: "imageUrl",
      key: "_id",
      item_name: "name",
    },
    {
      name: "Zelda",
      url: `https://botw-compendium.herokuapp.com/api/v2/all`,
      path_to_data: "data.data.equipment",
      path_to_image: "image",
      key: "id",
      item_name: "name",
    },
  ];

  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [fetched, setFetched] = useState();
  // Fetch data from API and update Fetched state and apiData state
  const fetchData = async (url, name) => {
    try {
      // Send GET request to the API URL
      const response = await axios({
        method: "get",
        url,
      });
      // Find the corresponding API object by name in ApiList
      const api = _.find(ApiList, { name });
      // Get the data from the response using the API's path_to_data property
      const data = _.get(response, api.path_to_data);
      // Update the state with the fetched data and name of the API
      setApiData(data);
      setFetched(name);
    } catch (error) {
      // Log any errors that occur during the fetch
      console.error(error);
    }
  };

  // Check if the image URL is working properly
  const checkLink = async (url) => {
    try {
      await axios({
        method: "get",
        url,
      });
      // Return true if the link doesn't contain "Noimage", indicating a valid image
      return !url.includes("Noimage");
    } catch (error) {
      // Return false if there's an error, indicating an invalid image
      return false;
    }
  };
  /**
   * set the data to only the good ones from the function checklink,
   * it check for each data if the checklink has returned true or false.
   */
  function handleFilterData(results) {
    // Filter the apiData based on the results of the checkLink function
    setFilteredData(_.filter(apiData, (item, index) => results[index]));
  }

  useEffect(() => {
    let promises = [];

    // Find the API object with the matching name from the fetched state
    const api = _.find(ApiList, { name: fetched });

    if (api) {
      // Create an array of Promises for each item in the API data
      promises = apiData.map((item) => {
        // Get the image path for this item from the API data
        const imagePath = _.get(item, api.path_to_image);

        // Check the link to the image using the `checkLink` function
        // and return a Promise for this check
        return checkLink(imagePath);
      });

      // Wait for all the Promises to resolve and then handle the results
      Promise.all(promises)
        .then(handleFilterData) // handleFilterData is a function that sets the filtered data based on the results of the link checks
        .catch(console.error);
      console.info("success");
    }
  }, [apiData.length]);

  // Function to render the data from the API in the last return,  perhaps it could be
  // used to send image to other components ?
  const renderApiData = () => {
    return (
      <div>
        {/* Button to go back to the list of  APIs */}
        <button
          type="button"
          onClick={() => {
            setFetched(null);
            setApiData([]);
            setFilteredData([]);
          }}
        >
          Précédent
        </button>
        {/* Map through the list of available APIs and display images for the fetched data */}
        {ApiList.map(
          (api) =>
            api.name === fetched &&
            filteredData?.map((item) => (
              <img
                key={_.get(item, api.key)}
                src={_.get(item, api.path_to_image)}
                alt={_.get(item, api.item_name)}
                style={{
                  width: "200px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            ))
        )}
      </div>
    );
  };
  // Render component
  // If no API has been fetched, display a list of available APIs to fetch data
  if (!fetched) {
    return (
      <div className="wrapper">
        <h2>Choisi ton thème !</h2>
        {/* Map through the list of APIs and display a button for each one */}
        {ApiList.map((api) => (
          <button
            type="button"
            key={api.name}
            onClick={() => {
              // When a button is clicked, fetch data from the corresponding API
              fetchData(api.url, api.name);
            }}
          >
            {api.name}
          </button>
        ))}
      </div>
    );
  }
  // If an API has been fetched, display the fetched data
  return renderApiData();
}

export default FetchButtons;
