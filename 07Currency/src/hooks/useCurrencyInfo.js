// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});
//     const baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;
//     useEffect(() => {
//         const URL = `${baseURL}/${fromCurrency}.json`;
//         fetch(URL)
//             .then(
//                 (res) => res.json()
//             )
//             .then(
//                 (data) => {
//                     setData(data[currency]);
//                 })
//             .catch(
//                 (err) => console.error(err)
//             );
//     }, [currency])
//     console.log(data)
//     return data;
// }



// export default useCurrencyInfo;



import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency) {
  const [data, setData] = useState({});
  const baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${baseURL}/${fromCurrency}.json`;

      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Status: ${response.status}\nStatus Text: ${response.statusText}`);
        }

        const responseJSON = await response.json();
        setData(responseJSON[fromCurrency]); // set the currency rates object

      } catch (error) {
        console.error("Fetch error:", error);
        setData({ error: "Failed to fetch exchange rate. Please try again later." });
      }
    };

    if (fromCurrency) {
      fetchData();
    }
  }, [fromCurrency]);

  return data;
}

export default useCurrencyInfo;
