# Instructor Notes

APIs come and go. Some alternatives that can be used with this lab that are free:

#### Alpha Vantage
*requires free api key registration*

- Base URL: https://www.alphavantage.co
- <a href="#alphavantage">Response examples for Alpha Vantage</a>

Alpha Vantage has more detailed information included in its responses, which contain nested objects. It also requires a relatively painless and fast sign-up for an API key. If you go this route, you can use Axios.


<a name="#alphavantage"></a>
__Alpha Vantage__

<details>
<summary></summary>

```js
{
  "Meta Data": {
    "1. Information": "Intraday (1min) prices and volumes",
    "2. Symbol": "MSFT",
    "3. Last Refreshed": "2017-07-11 16:00:00",
    "4. Interval": "1min",
    "5. Output Size": "Compact",
    "6. Time Zone": "US/Eastern"
  },
  "Time Series (1min)": {
    "2017-07-11 16:00:00": {
      "1. open": "70.0700",
      "2. high": "70.1250",
      "3. low": "69.9900",
      "4. close": "69.9900",
      "5. volume": "2311827"
    },
    "2017-07-11 15:59:00": {
      "1. open": "70.0650",
      "2. high": "70.0700",
      "3. low": "70.0500",
      "4. close": "70.0650",
      "5. volume": "115405"
    },
    ... //and so so forth
  }
}
```

</details>